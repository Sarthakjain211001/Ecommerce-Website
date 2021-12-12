import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Products = () => {
    return (
        <Container>
          {popularProducts.map((item)=>{
            return <Product item={item} key={item.id}/>   //Whenever we are using map method we should specify key which should be something unique.
          })}  
        </Container>
    )
}

export default Products
