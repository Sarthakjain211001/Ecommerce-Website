import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 100vw;
height: 100vh;
background:  linear-gradient(                  
            rgba(255,255,255,0.5),         
            rgba(255,255,255,0.5)
            ),                           // Linearr gradient to apply opacity to the background-image.
             url("https://media.istockphoto.com/photos/shopping-online-concept-shopping-service-on-the-online-web-with-by-picture-id1133980246?k=20&m=1133980246&s=612x612&w=0&h=bwut2YUV7gtnjrv354523xU_9S-TtKQOqGTdiGMsPfs=") ;
background-size: cover; 
overflow: hidden;

display: flex;
align-items: center;
justify-content: center;
`
const Wrapper = styled.div`
padding: 20px;
width: 40%;
background-color: white;
`
const Title = styled.h1`
font-size: 24px;
font-weight: 300;

`

const Form = styled.form`
display: flex;
flex-wrap: wrap;
`

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`
const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`

const Button = styled.button`
width: 40%;   //40% means 40% of the available space of the parent element
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
margin-left: 29%;
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="first name"/>
                    <Input placeholder="last name"/>
                    <Input placeholder="username"/>
                    <Input placeholder="email"/>
                    <Input placeholder="password"/>
                    <Input placeholder="Confirm password"/>
                    
                    <Agreement>By creating an account, I consert to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register