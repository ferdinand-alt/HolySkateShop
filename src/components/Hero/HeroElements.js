import styled from 'styled-components'
import ImgBg from '../../images/Holy.jpg'
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";

export const HeroContainer = styled(motion.div)`
  background: linear-gradient(rgba(0, 0, 0, 0.5),
   rgba(226, 106, 106, 0.4)),
    url(${ImgBg});
  background-position: left;
  background-size: cover;
  height: 100vh;
`;

export const HeroContent = styled.div`
height: calc(100vh - 80px);
max-height: 100%;
width: 100vw;
padding: 0rem calc((100vw - 1300px) / 2);
`

export const HeroItems = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
height: 100vh;
max-height: 100%;
padding: 0 2rem;
width: 650px;
color: #fff;
text-transform: uppercase;
line-height: 1;
font-weight: bold;
@media screen and (max-width: 650px){
    width: 100%;
}
`
export const HeroH1 = styled(motion.h1)`
  font-size: clamp(2rem, 10vw, 5rem);
  margin-bottom: 1rem;
  font-weight: 300;
  border-radius: 50%;
  box-shadow: 5px 13px 6px #d4af37;
  letter-spacing: 3px;
  text-shadow: 0px 5px 15px white;
`;
export const HeroP = styled(motion.p)`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
  font-weight: 300;
  text-shadow: 0px 5px 15px white;
`;

export const HeroBtn = styled(motion(Link))`
  font-size: 1.6rem;
  padding: 1rem 4rem;
  border: none;
  background: white;
  color: black;
  text-transform: uppercase;
  border-radius: 5px;
  transition: 0.3s ease-out;
  text-decoration: none;
  font-weight: lighter;
  box-shadow: 0px 4px 10px white;
  cursor: pointer;
  &:hover {
    box-shadow: 1px 0px 20px 5px white;
    transition: 0.2s ease-out;
  }
`;