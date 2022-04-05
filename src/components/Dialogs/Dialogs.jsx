import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css'
import Dialog from './Dialog/Dialog.jsx'
import Message from './Message/Message.jsx'


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map( dialog => <Dialog name={dialog.name} id={dialog.id} /> )

    let messagesElements = props.state.messagesData.map( message =>  <Message text={message.text}/> )

    let newMessageText = React.createRef();

    let sendMessage = () => {
        let text = newMessageText.current.value;
        alert(text)
    }

    return (
        <div className='content'>
            <div className={style.dialogs}>
                <div className={style.dialog}>
                    {dialogsElements}
                </div>
                <div className={style.message}>
                    {messagesElements}
                    <textarea className={style["post-new"]} ref={newMessageText}></textarea>
                    <button className={style["post-btn"]} onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;