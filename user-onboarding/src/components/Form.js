import React from "react";

export default function UserForm (props) {
    const {
        value,
        change,
        submit, 
        disabled,
        errors
    } = props




    return (
        <form onSubmit={submit}>
        
            <div className="errors">
                <div>{errors.username}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.terms}</div>
            </div>
            <label>Name:
           <input name='name' type='text' value={value.username} placeholder="enter your name" onChange={change}/>
            </label>
            <label>Email:
           <input name='email' type='email' value={value.email} placeholder="enter your email" onChange={change}/>
            </label>
            <label>Password:
           <input name='password' type='password' value={value.password} placeholder="enter your password" onChange={change}/>
            </label>
            <label> Terms:
           <input name='terms' type='checkbox' value={value.terms} onChange={change}/>
            </label>
            <button disabled={disabled}>Submit</button>

        </form>

    )
}