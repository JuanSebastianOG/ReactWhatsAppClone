import React, {useState,useEffect}from 'react'
import '../csscomponents/SidebarChat.css'
import { Avatar } from '@material-ui/core'

function SidebarChat({addNewChat}) {

    const [seed,setSeed] = useState("")

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000))
    }, []);
    const createChat = ()=>{
        const roomName = prompt("Please enter the name for chat");
        if (roomName){
            //do some db stuff..
        }
    }

    return !addNewChat ? ( 
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div
            className="sidebarChat__info">
                <h2>Room name</h2>
                <p>Last message...</p>
            </div>
        </div>
    ):(
        <div on onClick={createChat} className="sidebarChat">
            <h2>Add new chat</h2>
        </div>
    ); 

}

export default SidebarChat