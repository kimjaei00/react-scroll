import React from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormLabel, FormWrap,Text,FormInput,Icon } from './SigninElements'

const SignIn = () => {
  return (
    <>
    <Container>
        <FormWrap>
            <Icon to="/">freemed</Icon>
            <FormContent>
                <Form actiob="#">
                <FormH1>sign  in your account</FormH1>
                <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput type='email' required/>
                <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput type='password' required/>
                <FormButton type='submit'>Continue</FormButton>
                <Text>Forget Password</Text>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
      
    </>
  )
}

export default SignIn
