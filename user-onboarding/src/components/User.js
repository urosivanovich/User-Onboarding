import React from "react";

function User(props) {
    const { users } = props

    const display =  users.map(user => {
        return (
            <div key={user.id}>
                <p>Name: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Password:  {user.password}</p>
                <p>Terms: {user.terms}</p>
            </div>
        )
    })
    return display
}

export default User