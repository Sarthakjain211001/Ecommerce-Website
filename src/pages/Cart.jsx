import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Product7 from "../Images/product7.png"
import Product2 from "../Images/product2.png"

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  cursor: pointer;
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
display: flex;
justify-content: space-between;
margin-top: 20px;
`
const Info = styled.div`
flex: 3;
justify-content: space-between;
`;

const Product = styled.div`
display: flex;
justify-content: space-between;
margin: 20px 0px;
/* border: 3px solid blue */

`
const ProductDetail = styled.div`
flex: 2;
display: flex;

`
const Image = styled.img`
height: 30vh;
object-fit: cover;
`
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`
const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.span`
display: flex;
`

const Color = styled.span`
width: 20px;
height: 20px;
border-radius: 50%;
background-color : ${props => props.color};

`

const ProductSize = styled.span``

const PriceDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const QuantityContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`
const Quantity = styled.div`
font-size: 24px;
margin: 5px;
`
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
`
const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`

const Summary= styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
/* margin: 20px; */
padding: 20px;
height: 50vh;   //Whenever new items will get added the size of the summary box will increase. So we kept it's size like this not like 100px. .. 
`;
const SummaryTitle = styled.h1`
font-weight: 200;
`
const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;

font-weight:  ${props => props.type === "total" && "500"};  //If type is total then set the font-wieght to 500
font-size:  ${props => props.type === "total" && "24px"};  //If type is total then set the font-size to 24px
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``

const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
`


const Cart = () => {
  return (
    <div>
      <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
          <Title>YOUR BAG</Title>
          <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <TopText>Shopping Bag (2)</TopText>
              <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
              <Info>
              <Product>
                  <ProductDetail>
                      <Image src={Product7}/>
                      <Details>
                          <ProductName><b>Product:</b> WINTER JACKET</ProductName>
                          <ProductId><b>ID:</b> 8770054128</ProductId>
                          <ProductColor><b>Color: </b><Color color="black"/></ProductColor>
                          <ProductSize><b>Size:</b> M</ProductSize>
                      </Details>
                  </ProductDetail>
                  <PriceDetail>
                          <QuantityContainer>
                              <Remove/>
                              <Quantity>1</Quantity>
                              <Add/>
                          </QuantityContainer>
                          <ProductPrice>Rs 1500</ProductPrice>
                  </PriceDetail>
              </Product>
              <Hr/>
              <Product>
                  <ProductDetail>
                      <Image src={Product2}/>
                      <Details>
                          <ProductName><b>Product:</b> STYLISH TOP</ProductName>
                          <ProductId><b>ID:</b> 9856321047</ProductId>
                          <ProductColor><b>Color: </b><Color color="green"/></ProductColor>
                          <ProductSize><b>Size:</b> M</ProductSize>
                      </Details>
                  </ProductDetail>
                  <PriceDetail>
                          <QuantityContainer>
                              <Remove/>
                              <Quantity>1</Quantity>
                              <Add/>
                          </QuantityContainer>
                          <ProductPrice>Rs 800</ProductPrice>
                  </PriceDetail>
              </Product>
              </Info>
              <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                  <SummaryItemText>Subtotal</SummaryItemText>
                  <SummaryItemPrice>Rs 1000</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Estimated Shipping</SummaryItemText>
                  <SummaryItemPrice>Rs 50</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Shipping Discount</SummaryItemText>
                  <SummaryItemPrice>Rs -50</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                  <SummaryItemText >Total</SummaryItemText>
                  <SummaryItemPrice >Rs 1000</SummaryItemPrice>
                </SummaryItem>
                <Button>CHECKOUT NOW</Button>
              </Summary>
          </Bottom>
        </Wrapper>
        <Footer />
      </Container>
    </div>
  );
};

export default Cart;
