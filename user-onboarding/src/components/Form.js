import React from "react";
import styled from 'styled-components'

const StyledForm = styled.form`
padding:20px;
display:flex;
flex-direction:column;
margin:auto;
margin-top:50px;
width:200px;

justify-content:center;
label{
    margin:10px;
}
button{
    display:flex;
    padding:10px;
    width:100px;
    border-radius: 20px;
    margin:auto;
    background-color:#39bf99;
    color:white;
    justify-content:center;
    :disabled{
        background-color: #1a7ebd;
    }
`
const StyledDiv = styled.div`
color:red;
`


export default function UserForm (props) {
    const {
        value,
        change,
        submit, 
        disabled,
        errors
    } = props

    

return (
        <StyledForm onSubmit={submit}>
            <StyledDiv className="errors">
                <div>{errors.username}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.terms}</div>
            </StyledDiv>
            <div className="inputs">
                <label>Username:
                    <input 
                    name='username' 
                    type='text' 
                    value={value.username} 
                    placeholder="username" 
                    onChange={change}/>
                </label>
                <label>Email:
                <input
                    name='email'
                    type='email' 
                    value={value.email} 
                    placeholder="email" 
                    onChange={change}/>
                </label>
                <label>Password:
                <input 
                    name='password' 
                    type='password' 
                    value={value.password} 
                    placeholder="password" 
                    onChange={change}/>
                </label>
                <label> Terms of service:
                <input 
                    name='terms' 
                    checked={value.terms}
                    type='checkbox' 
                    
                    onChange={change}/>
                </label>
            </div>
            <button disabled={disabled}>Submit</button>
        </StyledForm>

    )
}