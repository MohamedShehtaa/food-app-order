import React from 'react'
import ReactDOM from 'react-dom'

import classes from './Modal.module.css'

const BackDrop = ( props ) => {

    return (
        <div className={ classes.backdrop } onClick={ props.onclose } />
    )
}
const ModalOverLay = ( props ) => {
    return (
        <div className={ classes.modal } >
            <div className={ classes.content }> { props.children }</div>
        </div> )
}

const portazlElement = document.getElementById( 'overlays' )
export default function Modal( props ) {// i do the portal
    return (
        <>
            {/* <BackDrop />
            <ModalOverLay >{ props.children }</ModalOverLay> */}
            { ReactDOM.createPortal( <BackDrop onclose={ props.onclose } />, portazlElement ) }
            { ReactDOM.createPortal( <ModalOverLay >{ props.children }</ModalOverLay>, portazlElement ) }
        </>
    )
}
