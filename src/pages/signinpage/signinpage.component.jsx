import React, { useEffect, useState } from 'react'
import { Page } from '../page.styles'
import background from "../../images/home-bg.jpeg";
import { ReactComponent as ReactLogo } from "../../logo.svg";
import { SigninFormContainer, SigninPageheader, SignupPageInput } from './signinpage.styles';
import { Heading, HyperLink } from '../../components/misc/text.styles';
import { useFormValidator, withValidation } from '../../hooks/form-validator/form-validator';
import { FormInputContainer, InputBox, InputLabel } from '../../components/misc/inputs.styles';
import FormErrors from '../../components/form-errors/form-errors.component';
import { Button } from '../../components/buttons.styles';
import { auth } from '../../firebase';
import Header from '../../components/header/header.component';
const ValidatedEmailInput = withValidation(SignupPageInput, 'email', 'email');
const ValidatedPasswordInput = withValidation(SignupPageInput, 'password', 'password', {required: true});
const SigninPage = () => {
      const formApi = useFormValidator();
      const [loading, setLoading] = useState(false);
      const [signinFailed, setSigninFailed] = useState(false);
      const [errMessage, setErrMessage] = useState();
      
      const signIn = async () => {
            setLoading(true);
            try {
                  const {email, password} = formApi.state.values;
                  const res = await auth.signInWithEmailAndPassword(email, password);
                  

            } catch(err) {
                  setLoading(false);
                  switch(err.code) {
                        case "auth/user-not-found":
                              setErrMessage("Sorry, we can't find an account with this email address. Please try again or create a new account");
                        break;
                        case "auth/wrong-password":
                              
                              setErrMessage('Incorrect password. Please try again or you can reset your password.');
                        break;
                        default:
                              setErrMessage(err.message);

                  }
                  setSigninFailed(true);
            }
            
      }
     
      return (
            <Page backgroundImage={`url(${background})`} className='centered'>
                
				<SigninPageheader>
					<ReactLogo
						style={{
							maxHeight: "50%",
							maxWidth: "12.5%",
							minHeight: "43px",
							minWidth: "120px",
							paddingTop: "8px",
						}}
					/>
					
				</SigninPageheader>
                        <SigninFormContainer onSubmit={e => formApi.handleSubmit(e, signIn)}>
                              <Heading style={{margin: '0 0 10px 0'}}>Sign In</Heading> 
                              {
                                    signinFailed &&
                                    <div style={{color: 'white', backgroundColor: '#e87c03', padding: '10px', borderRadius: '4px', textAlign: 'left'}}>{errMessage}</div>
                              }

                              <FormInputContainer>

                                    <ValidatedEmailInput api={formApi}/>
                                    <InputLabel>Email</InputLabel>

                              </FormInputContainer>

                              <FormErrors state={formApi.state} inputName='email'/>

                              <FormInputContainer>

                                    <ValidatedPasswordInput api={formApi}/>  
                                    <InputLabel>Password</InputLabel>

                              </FormInputContainer>

                              <FormErrors state={formApi.state} inputName='password'/>
                              <Button className='signinbutton'>Sign in</Button>
                              <p style={{color: '#737373'}}>New to Netflix? <HyperLink href='/signup'>Sign up now.</HyperLink></p>
                        </SigninFormContainer>
                              
            </Page>
      )
}

export default SigninPage
