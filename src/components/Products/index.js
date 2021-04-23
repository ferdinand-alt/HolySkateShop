import React from 'react'
import {
    ProductsContainer,
    ProductsHeading,
    ProductWrapper,
    ProductTitle,
    ProductDesc,
    ProductWidth,
    ProductPrice,
    ProductButton,
    ProductCard,
    ProductImg,
    ProductInfo,
} from './ProductElements';
import { pageAnimation } from "../../animation";
import NavBar from '../NavBar'
import Sidebar from "../SideBar";

export const Products = ({heading, data, toggle, isOpen}) => {
    return (
      <ProductsContainer
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        isOpen={isOpen}
      >
        <NavBar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <ProductsHeading>{heading}</ProductsHeading>
        <ProductWrapper>
          {data.map((product, index) => {
            return (
              <ProductCard key={index}>
                <ProductImg src={product.img} alt={product.alt} />
                <ProductInfo>
                  <ProductTitle>{product.name}</ProductTitle>
                  <ProductDesc>{product.desc}</ProductDesc>
                  <ProductWidth>{product.width}</ProductWidth>
                  <ProductPrice>{product.price}</ProductPrice>
                  <ProductButton>{product.button}</ProductButton>
                </ProductInfo>
              </ProductCard>
            );
          })}
        </ProductWrapper>
      </ProductsContainer>
    );
}

export default Products
