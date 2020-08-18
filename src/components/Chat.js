import React from 'react'
import '../csscomponents/Chat.css'
import { Avatar } from '@material-ui/core'


function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar/>
            </div>
            <div className="chat__body">

            </div>
            <div className="chat__footer">

            </div>
        </div>
    )
}

export default Chat
