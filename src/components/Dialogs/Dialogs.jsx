import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>

    );
}

const Message = (props) => {
    return (
        <div className={classes.dialog}> {props.message}</div>

    );
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'DIMON'},
        {id: 2, name: 'VITYA'},
        {id: 3, name: 'SASHA'},
        {id: 4, name: 'VASYA'},
        {id: 5, name: 'PETYA'},
        {id: 6, name: 'IVAN'},
    ]

    let messages = [
        {id: 1, message: 'HI!!!!'},
        {id: 2, message: 'How are you!??'},
        {id: 3, message: 'YOOOOO'},
        {id: 4, message: 'YOOOOO'},
        {id: 5, message: 'YOOOOO'}
    ]

    let dialogsElements = dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>
        );

    let messagesElements = messages
        .map(message => <Message message={message.message}/>
        );

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;
