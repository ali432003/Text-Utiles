import React from 'react'

export default function Alert(props) {
    return (
       props.alert && <div className={`alert alert-${props.alert.stu} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.stu}</strong> : {props.alert.msg}
        </div>
    )
}
