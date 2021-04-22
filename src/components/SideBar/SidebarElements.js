import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaCross } from 'react-icons/fa'
import jesusSkateBg from '../../images/jesusSkateBg.jpg'

export const SidebarContainer = styled.aside`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${jesusSkateBg});
  background-repeat: repeat;
  background-size: 120px 100px;
  object-fit: cover;
  position: fixed;
  z-index: 999;
  width: 350px;
  height: 100%;
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.9s ease-in;
  box-shadow: -10px 0px 20px 5px white;
  right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const CloseIcon = styled(FaCross)`
  color: white;
  font-size: 3rem;
  -webkit-filter: drop-shadow(5px 5px 5px white);
  filter: drop-shadow(5px 5px 5px white);
`;

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
border: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`
export const SidebarMenu = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-auto-rows: repeat(3, 80px);
text-align: center;
@media screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 60px)
}
`

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin: 2rem;
  background: white;
  padding: 1rem;
  text-decoration: none;
  list-style: none;
  color: black;
  transition: 0.2s ease-in-out;
  text-transform: uppercase;
  box-shadow: 1px 0px 12px 5px white;
  &:hover {
    box-shadow: 1px 0px 20px 5px white;
    transition: 0.2s ease-in-out;
  }
`;
export const SideBtnWrap = styled.div`
display: flex;
justify-content: center;
`

export const SidebarRoute = styled(Link)`
  background: yellow;
  white-space: nowrap;
  padding: 16px 64px;
  background: white;
  color: black;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: 0.2s ease-in-out;
    background: white;
    color: black;
  }
`;