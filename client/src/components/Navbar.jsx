import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import { logout } from "../redux/UserRedux";
import { emptyCart } from "../redux/cartRedux";
import { emptyOrders } from "../redux/orderRedux";

const Container = styled.div`
  height: 60px;
  padding-bottom: 5px;
  ${mobile({ height : "50px", marginBottom: "30px", marginTop:"-20px"})}
`;
const Wrapper = styled.div`
  padding: 0px 20px; //10 20
  display: flex; //Made Wrapper a flex box.
  justify-content: space-between; //To make left,center,right be apart from each other
  align-items: center;
  ${mobile({  padding: "10px 0px"})}
`;
const Left = styled.div`
  flex: 1; //This means that Left will be 1 units. If flex:2 then it will make Left 2 units whereas center and right will be 1 units each.
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end; // to move all the 3 items(login, signup, cart) to the right: ;
  ${mobile({ flex:2, justifyContent: "center"})}
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display : "none"})}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  ${mobile({width : "50px"})}
`;
const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  ${mobile({  fontSize: "24px"})};
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px"})}
`;

const Navbar = () => {
  const c_quantity = useSelector(state => state.cart.cart_quantity);   
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.user.currentUser)

  const handleLogout=(e)=>{
      e.preventDefault();
      dispatch(logout());
      dispatch(emptyCart()); //we will empty the cart state as soon as the user logs it. (** NOTE: This will clear the cart state only from the frontend not from the backend)
      dispatch(emptyOrders());
      navigate("/login");
  }

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search"/>
            <Search style={{ color: "gray", fontSize: 16 }} />{" "}
            {/*Applying style on Search icon using custom inline style */}
          </SearchContainer>
        </Left>
        <Center>
          <Logo><Link to = "/" style={{"textDecoration":"none", "color":"black"}}>LAMA.</Link></Logo>
        </Center>
        <Right>
          
          {!user  && <MenuItem><Link to="Register" style={{"textDecoration":"none"}}>Register</Link></MenuItem>}
          {!user  && <MenuItem><Link to="/login" style={{"textDecoration":"none"}}>SignIn</Link></MenuItem>}
           
          <MenuItem>
          <Link to="/cart" >
            <Badge badgeContent={c_quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
            </Link>
          </MenuItem>
          <MenuItem >
          <Link to="/myOrders" style={{"textDecoration":"none"}}>
            My Orders
          </Link>
          </MenuItem>
          <MenuItem style={{"color": "red"}} onClick={handleLogout}>Logout</MenuItem>
          
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
