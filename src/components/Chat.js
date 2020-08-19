import React, { useState, useEffect } from 'react'
import '../csscomponents/Chat.css'
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined, InsertEmoticon, MessageSharp } from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic"
import { useParams } from "react-router-dom"
import "../csscomponents/Chat.css"
import db from '../firebaseConfig';
import firebase from 'firebase'
import { useStateValue } from '../contexts/StateProvider'

function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([]);
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot((snaphot) =>
                setRoomName(snaphot.data().name));

            db.collection("rooms").doc(roomId).collection("messages").orderBy('timestamp', 'asc').onSnapshot((snapshot) => setMessages(snapshot.docs.map((doc) => doc.data())))
        }
        return () => {

        }
    }, [roomId])


    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [roomId]);
    const sendMessage = (e) => {
        e.preventDefault();
        console.log("You typed -->", input);
        db.collection('rooms').doc(roomId).collection('messages').add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput('')
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>
                        last seen {" "}
                        {new Date(
                            messages[messages.length - 1]?.timestamp?.toDate()
                        ).toUTCString()}</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                {messages.map(message => (
                    <p className={`chat__message ${message.name === user.displayName && "chat__reciever"}`}>
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                        <span className="chat__timestamp">
                            {new Date(message.timestamp?.toDate()).toUTCString()}
                        </span>
                    </p>
                ))}


            </div>
            <div className="chat__footer">
                <InsertEmoticon />
                <form >
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
                    <button onClick={sendMessage}>Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
