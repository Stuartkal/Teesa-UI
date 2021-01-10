import React from 'react'
import CloseIcon from '@material-ui/icons/Close';

const Modal = (props) => {
    return (
        <div className="drop-shadow">
            <div className="modal">
                <div className="modal-header">
                    <div className="modal-header-inner">
                        <h2>Post Bill</h2>
                        <CloseIcon className="close-icon" onClick={props.close}/>
                    </div>
                </div>
                {props.children}
            </div>
        </div>
    )
}

export default Modal
