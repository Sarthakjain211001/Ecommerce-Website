import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

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
width: 25%;
background-color: white;
border-radius: 10px;
${mobile({ width: "80%",})}

`
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
margin-left: 36%;
`

const Form = styled.form`
display: flex;
flex-direction: column;
`

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 8px 0px ;
padding: 10px;
`

const Button = styled.button`
width: 100%;   //40% means 40% of the available space of the parent element
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
/* margin-left: 29%; */
margin-bottom: 10px;
margin-top: 10px;

`
const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
    return (
        <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Button>LOGIN</Button>
                <Link>Forgot password ?</Link>
                <Link>Register</Link>
                
            </Form>
        </Wrapper>
    </Container>
    )
}

export default Login
