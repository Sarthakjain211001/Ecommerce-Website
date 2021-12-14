import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import product1 from "../Images/product1.png"
import { mobile } from '../responsive'


const Container = styled.div``

const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({flexDirection :"column", padding:"10px"})}
`
const ImgContainer = styled.div`
flex:1;
padding: 0px 50px;

`
const Image = styled.img`
/* border: 3px solid red; */
width: 80%;
height: 90vh;
object-fit: cover;
${mobile({height: "40vh", marginLeft:"15px"})}
`

const InfoContainer = styled.div`
flex:1;
${mobile({padding:"10px"})}
`
const Title = styled.h1`
font-weight: 200;
`

const Description = styled.p`
margin: 20px 0px;
`

const  Price = styled.span`
font-weight: 100;
font-size: 40px;
`
const FilterContainer = styled.div`
display: flex;
width: 50%;
margin: 30px 0px;
justify-content: space-between;
${mobile({width:"100% "})}

`
const Filter = styled.div`
display: flex;
align-items: center;
`
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0px 5px;
cursor: pointer;
`
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
` 
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
display: flex;
align-items: center;
width: 50%;
justify-content: space-between;

`
const QuantityContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`
const Quantity = styled.span`
height: 30px;
width: 30px;
border: 1px solid teal;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`
const Button = styled.button`
margin-top: 20px;
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;
border-radius: 5px;
transition: all 0.2s ease;

&:hover{
    background-color: teal;
    color: white;
}
`


const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                  <Image src={product1}/>
                </ImgContainer>
                <InfoContainer>
                  <Title>Formal Shirt</Title>
                  <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus perspiciatis id sed adipisci eius, doloribus enim dicta deleniti error odit blanditiis suscipit consequuntur illum dolores maiores ipsum numquam. Tenetur, pariatur!</Description>
                  <Price>Rs.600</Price>
                  <FilterContainer>
                      <Filter>
                          <FilterTitle>
                              Color
                          </FilterTitle>
                          <FilterColor color="black"></FilterColor>
                          <FilterColor color="Blue"></FilterColor>
                          <FilterColor color="gray"></FilterColor>
                      </Filter>
                      <Filter>
                          <FilterTitle>Size</FilterTitle>
                          <FilterSize>
                              <FilterSizeOption>XS</FilterSizeOption>
                              <FilterSizeOption>S</FilterSizeOption>
                              <FilterSizeOption>M</FilterSizeOption>
                              <FilterSizeOption>L</FilterSizeOption>
                              <FilterSizeOption>XL</FilterSizeOption>
                          </FilterSize>
                      </Filter>
                  </FilterContainer>
                  <AddContainer>
                          <QuantityContainer>
                              <Remove/>
                              <Quantity>1</Quantity>
                              <Add/> 
                          </QuantityContainer>            
                      </AddContainer>                     
                  <Button>ADD TO CART</Button>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product
