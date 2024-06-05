import React from 'react'

function Alert(props) {
    return (
        props.alert && <div>
            <div className="alert alert-success" role="alert">
            <strong>{props.alert.type} :</strong> {props.alert.msg}
            </div>
        </div>
    )
}

export default Alert
