import React, { useEffect, useState } from 'react'
import { Page } from '../page.styles'
import background from "../../images/home-bg.jpeg";
import { ReactComponent as ReactLogo } from "../../logo.svg";
import { SigninFormContainer, SignupPageheader, SignupPageInput } from './signinpage.styles';
import { Heading } from '../../components/misc/text.styles';
import { useFormValidator, withValidation } from '../../hooks/form-validator/form-validator';
import { FormInputContainer, InputBox, InputLabel } from '../../components/misc/inputs.styles';
import FormErrors from '../../components/form-errors/form-errors.component';
import { Button } from '../../components/buttons.styles';
import { auth } from '../../firebase';
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
            <Page>
                  <div
				style={{ backgroundImage: `url(${background})`, height: '100vh', width: '100%', display: 'flex', justifyContent: 'flex-start',  }}
			>
				<SignupPageheader>
					<ReactLogo
						style={{
							maxHeight: "50%",
							maxWidth: "12.5%",
							minHeight: "43px",
							minWidth: "120px",
							paddingTop: "8px",
						}}
					/>
					
				</SignupPageheader>
                        <SigninFormContainer onSubmit={e => formApi.handleSubmit(e, signIn)}>
                              <Heading style={{marginBottom: '10px'}}>Sign In</Heading> 
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
                        </SigninFormContainer>
                  </div>
            </Page>
      )
}

export default SigninPage
