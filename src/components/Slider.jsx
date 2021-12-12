import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import SareeImg from "../Images/Saree.png"

const Container = styled.div`
  width: 100%;
  height: 100vh; // 100 vh means that 100% of the view port(i.e 100% of the screen)
  display: flex;
  /* background-color: teal; */
  position: relative;
  overflow: hidden; // To prevent the content from going out of the page horizontally
`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center; //short form : aic
  justify-content: center; //short form : jcc
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) =>
    props.direction === "left" &&
    "10px"}; //props. If direction is left then set left property to 10px
  right: ${(props) =>
    props.direction === "right" &&
    "10px"}; //props. If direction is right then set right property to 10px
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`
const Wrapper = styled.div`
  height: 100%;
  display: flex; //To make the slides come horizontal after one another
  transform: translateX(-200vw); //For moving the slider (i.e move the slides in X direction).  For left moving use (-) . For right use (+  or nothing).  
                                 // vw means viewport width. 100vw means 100% of viewport. (-) means move to left direction.
`                                 
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${props=> props.bg};  //Passing backgound color as props.
`
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  /* border: 3px solid green; */
`
const Image = styled.img`
  height: 80%;
  margin-left: 20px;
  margin-top: 30px;
`
const InfoContainer = styled.div`
  flex: 1.5;
  padding: 50px;

`
const Title = styled.h1`
font-size: 70px;

`
const Description = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`
const Button = styled.button`
padding: 10px;
font-size: 20px;
background: transparent;
cursor: pointer;
`
const Slider = () => {
  return (
    <div>
      <Container>
        <Arrow direction="left"> {/*direction is passed as a prop here*/}
          <ArrowLeftOutlined />  {/*Left Arrow on Slider. Taken from Material UI */}
        </Arrow>
        <Wrapper>
          <Slide bg="#eef6fc">
            <ImgContainer>
              <Image src= {SareeImg}/>
            </ImgContainer>
            <InfoContainer>
                <Title>SUMMER SALE</Title>
                <Description>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</Description>
                <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
          <Slide bg="#faf3f3">
            <ImgContainer>
              <Image src= {SareeImg}/>
            </ImgContainer>
            <InfoContainer>
                <Title>SUMMER SALE</Title>
                <Description>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</Description>
                <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
          <Slide bg="#fdfdd7">
            <ImgContainer>
              <Image src= {SareeImg}/>
            </ImgContainer>
            <InfoContainer>
                <Title>SUMMER SALE</Title>
                <Description>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</Description>
                <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        </Wrapper>
        <Arrow direction="right"> {/*direction is passed as a prop here*/}
          <ArrowRightOutlined />  {/*Right Arrow on Slider. Taken from Material UI */}
        </Arrow>
      </Container>
    </div>
  );
};

export default Slider;
