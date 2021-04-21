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

export const Products = ({heading, data}) => {
    return (
        <ProductsContainer>
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
                    )
                })}
            </ProductWrapper>
        </ProductsContainer>
    )
}

export default Products
