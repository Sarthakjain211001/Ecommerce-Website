import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { fetchUserOrders } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "5px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Order = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 2px solid black; */
  align-items: center;
  border: 1px solid gray;
  border-radius: 10px;
  margin-bottom: 20px;
`;
const Top = styled.div`
  width: 95%;
  display: flex;
  /* margin-bottom: 20px; */
  font-size: 20px;  
`;
const OrderId = styled.div`
  margin-right: 40px;
`;
const OrderDate = styled.div`
  margin-right: 40px;
`;
const OrderStatus = styled.div`
  margin-right: 40px;
`;

// const Middle = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 95%;
// `;

const Bottom = styled.div`
  width: 95%;
  display: flex;
`;
const Left = styled.div`
/* border: 2px solid red; */
flex: 50%;
border-right: 1px solid gray;
/* padding-right: -10px; */
margin-right: 20px;
`;
const Right = styled.div`
flex: 30%;
display: flex;
flex-direction: column;
/* border: 2px solid purple; */
`;


const Product = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  /* border: 2px solid purple;  */
`;
const ProductDetails = styled.div`
  display: flex;
  width: 100%;
  /* border: 1px solid red; */
  flex: 50%;
  /* border: 2px solid purple;  */
  /* justify-content: center; */
  align-items: center;
`;
const Product_Img = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 10px;
  object-fit: cover;
  /* border: 2px solid purple; */
`;

const ProDesc = styled.div`
  display: flex;
  flex-direction: column;
  font-size  : 15px;
  /* border: 2px solid purple; */
`;
const ProTitle = styled.div`
/* border: 2px solid black; */
/* width: 50px; */
`;
const ProSize = styled.div``;
const ProColor = styled.div``;
const ProPrice = styled.div``;

const Quantity = styled.div`
  width: 100%;
  /* border: 1px solid black; */
  flex: 25%;
`;
const Price = styled.div`
  width: 100%;
  /* border: 1px solid green; */
  flex: 25%;
`;
const DelAddress = styled.div`
  display: flex;
  margin-bottom: 20px;
  font-size: 18px;
`;
const TotalAmt = styled.div`
  font-size: 25px;
`;
const AddressTitle = styled.div`
  margin-right: 20px;
`;
const Address = styled.div`
  display: flex;
  flex-direction: column;
`;
const Lane = styled.div``;
const CityStateCountry = styled.div``;

const Hr = styled.hr`
background-color: #bbbbbb;
border: none;
width: 100%;
height: 1px;
`

const Orders = () => {

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const user_Id = user.currentUser._id;

  useEffect(() => {
    fetchUserOrders(dispatch, user_Id);
  }, [user])

  const orders = useSelector(state => state.orders)
  
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your Orders</Title>
        {orders.myOrders.map(order => (<Order key={order._id}>
          <Top>
            <OrderId>OrderId : {order._id}</OrderId>
            <OrderDate>Ordered On: {order.createdAt.substr(0,10)}</OrderDate>
            <OrderStatus>{order.status}</OrderStatus>            
          </Top>
          <Hr/>
          <Bottom>
            <Left>
            <Product>
              <ProductDetails>Product</ProductDetails>
              <Quantity>Quantity</Quantity>
              <Price>Price</Price>
            </Product>
            {order.products.map(product =>(
            <Product >
              <ProductDetails>
                <Product_Img src={product.img} />

                <ProDesc>
                  <ProTitle>{product.title}</ProTitle>
                  <ProSize>Size: {product.size}</ProSize>
                  <ProColor>Color : {product.color}</ProColor>
                  <ProPrice>Price: {product.price}</ProPrice>
                </ProDesc>
              </ProductDetails>
              <Quantity>{product.quantity}</Quantity>
              <Price>Rs {product.quantity * product.price}</Price>
            </Product>))}

            
            </Left>
            <Right>
            <DelAddress>
              <AddressTitle>Delivery Address :</AddressTitle>
              <Address>
                <Lane>{order.address.address.line1}</Lane>
                <CityStateCountry>{order.address.address.city}, {order.address.address.country}</CityStateCountry>
              </Address>
            </DelAddress>
            <TotalAmt>Total : Rs {order.amount}</TotalAmt>
             </Right>
          </Bottom>
        </Order>)
        )}
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Orders;
