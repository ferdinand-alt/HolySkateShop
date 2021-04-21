import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import JesusSkate from '../../images/jesus3.png'

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  font-family: "Monoton", cursive;
  font-weight: 500;
  font-size: 4.5rem;
  align-items: center;
  text-decoration: none;
  text-shadow: 0px 5px 15px white;
  cursor: pointer;
  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: white;
  position: fixed;
  text-transform: uppercase;
  text-shadow: 0px 5px 15px white;
  p {
    transform: translate(-170%, 180%);
    font-weight: bold;
    font-size: 1.3rem;
  }
`;

export const Bars = styled.div`
  background-image: url(${JesusSkate});
  background-position: center;
  background-size: cover;
  height: 70px;
  transform: translate(-50%, -10%);
  -webkit-filter: drop-shadow(5px 5px 5px white);
  filter: drop-shadow(5px 5px 5px white);
`;