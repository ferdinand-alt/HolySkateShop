import styled from 'styled-components'
import { motion } from "framer-motion";

export const ProductsContainer = styled(motion.div)`
  margin-right: ${({ isOpen }) => (isOpen ? "25%" : "")}; 
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: white;
  background-color: black;
  transition: 1s ease-out;
`;

export const ProductWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 0 auto;
`

export const ProductCard = styled.div`
margin: 0 2rem;
line-height: 2;
width: 300px;
`

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  overflow: hidden;
  border-radius: 3px;
  box-shadow: 1px 2px 18px white;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2.5rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  font-weight: 300;
  font-family: "Monoton";
  letter-spacing: 3px;
  text-shadow: 0px 5px 15px white;
`;

export const ProductTitle = styled.h2`
font-weight: 400;
font-size: 1.8rem;
`
export const ProductInfo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 2rem;
text-align: center;
`

export const ProductWidth = styled.p`
  margin-bottom: 0.1rem;
  font-size: 1.4rem;
  color: white;
`;

export const ProductDesc = styled.p`
margin-bottom: 1rem;
font-size: 1.2rem;
`

export const ProductPrice = styled.p`
margin-bottom: 0.5rem;
font-size: 1.8rem;
`

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  background: white;
  font-family: inherit;
  color: black;
  text-transform: uppercase;
  box-shadow: 1px 2px 6px white;
  transition: 0.2s ease;
  border: none;
  &:hover {
    box-shadow: 1px 0px 20px 5px white;
    transition: 0.2s ease;
    cursor: pointer;
  }
`;