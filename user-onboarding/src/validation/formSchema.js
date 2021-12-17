import * as yup from 'yup';


const formSchema = yup.object().shape({
    username: yup
    .string()
    .trim()
    .required('username is required')
    .min(10, 'username must be 10 caracters'),
    email: yup
    .string()
    .email('Valid email address please')
    .required('Email is required'),
    password: yup
    .string()
    .required('Password is required'),
    terms: yup
    .boolean()
    .oneOf([true], "* You must agree to the Terms of Service"),

})

export default formSchema;