import React from "react";
import FormInput from "../form-input/form-input.compnent";
import CustomButton from "../custom-button/custom-button-component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { createUserWithEmailAndPassword } from "firebase/auth";

import './sign-up.style.scss'



class SignUp extends React.Component {
    constructor () {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault()
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("passwords don't match");
            return
        }
        else if (password.length < 6) {
            alert('password must be 6 character or longer')
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user  = userCredential.user;
                    createUserProfileDocument(user,{ displayName} )
                
                    this.setState({
                        displayName:'',
                        email: '',
                        password: '',
                        confirmPassword: ''
                    })
           
                }).catch(e => {
                    console.log(e)
                })
                    
        }
            

        catch (e) {
            console.log(e)
        }
    }

         handleChange = (event) => {
            const { name, value } = event.target;
            this.setState({ [name]: value })
        };

     render(){
        const {displayName,email,password,confirmPassword}= this.state
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign-up with you email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        reqired
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='email'
                        reqired
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='password'
                        reqired
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        reqired
                    />
                    <CustomButton type='submit'> Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp