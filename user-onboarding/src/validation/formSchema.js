import * as yup from 'yup';


const formSchema = yup.object().shape({
    username: yup
    .string()
    .trim()
    .required('username is required')
    .min(2, 'username must be 2 caracters'),
    email: yup
    .string()
    .email('Valid email address please')
    .required('Email is required'),
    password: yup.string()
    .required('Password is required'),
    terms: yup
    .boolean()
    .required('please agree with our policy'),

})

export default formSchema;