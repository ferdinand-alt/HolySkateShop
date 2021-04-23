import styled from 'styled-components'
import {motion} from 'framer-motion'

export const FormContainer = styled(motion.div)`
  margin-right: ${({ isOpen }) => (isOpen ? "25%" : "")};
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: white;
  background-color: black;
  transition: 1s ease-out;
`;

export const StyledFormWrapper = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  padding: 0 20px;
`;

export const StyledForm = styled.form`
  width: 80%;
  max-width: 700px;
  padding: 50px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  color: black;
  flex-direction: column;
  box-shadow: 1px 2px 26px white;
  border-radius: 5px;
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  resize: none;
  border-radius: 5px;
`;

export const StyledTextArea = styled.textarea`
  background-color: #eee;
  min-height: 100px;
  width: 100%;
  border-radius: 5px;
`;

export const StyledButton = styled.button`
display: block;
background-color: #f7797d;
border: none;
height: 40px;
font-size: 1rem;
margin-top: 2rem;
border-radius: 5px;
padding: 0 20px;
cursor: pointer;
`

export const StyledError = styled.div`
color: red;
font-weight: 800;
margin: 0 0 40px 0;
`

