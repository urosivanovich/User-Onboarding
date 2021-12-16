import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import * as yup from 'yup';
import formSchema from './validation/formSchema';
import User from './components/User';
import Form from './components/Form'

// Initial States

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  terms: false,
}

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  terms: ''
}


const initialUsers = []
const initialDisabled = false

function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  // const getUsers = () => {
  //   axios.get('https://reqres.in/api/users')
  //   .then(resp => {
  //     setFriends(resp.data)
  //   })
  // }

  

  const change = evt => {
    evt.preventDefault()
    const { name, value, checked, type } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value
    inputChange(name, valueToUse)
  }

  const inputChange = (name, value) => {
    yup.reach(formSchema, name).validate(value).then(() => {
      setFormErrors({...formErrors, [name]: ''})
    }).catch(err => {
      setFormErrors({...formErrors, [name]: err.errors[0]})
    })
    setFormValues({...formValues, [name]:value})
  }

  const postUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(resp => {
      setUsers([resp.data, ...users])
    })
    .catch(err=> {
      console.log(err)
    })
    setFormValues(initialFormValues)
  }

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.trim(),
      terms: formValues.terms,
    }
    postUser(newUser)
    setUsers(users.concat(newUser))
  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid=>setDisabled(!valid))
  }, [formValues])


  return (
    <div className="App">
      <h1>Sign in</h1>
      <Form 
        value={formValues}
        change={change}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
     />
     <User users={users} />
    </div>
  );
}

export default App;
