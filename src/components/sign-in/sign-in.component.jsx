import React from "react";
import './sign-in.style.scss';
import FormInput from "../form-input/form-input.compnent";
import CustomButton from "../custom-button/custom-button-component";
import { signInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

    }

    handleSubmit = e =>{
        e.preventDefault();
        this.setState({email:'',password:''})
    }
    
    onHandle = e => {
        const { name, value } = e.target
        this.setState({[name]:value})
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign up with your e-mail and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' name='email' label='email' value={this.state.email} HandleChange= {this.onHandle} required/>
                    <FormInput type='password' label='password' name='password' value={this.state.password} HandleChange= {this.onHandle}  required/>
                    <div className="buttons">
                        <CustomButton type="submit">Submit!</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn