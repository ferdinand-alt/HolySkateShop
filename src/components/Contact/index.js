import React, { useState } from "react";
import Sidebar from "../SideBar";
import NavBar from "../NavBar";
import {
  StyledFormWrapper,
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledButton,
  StyledError,
  FormContainer,
} from "./FormElements";
import { pageAnimation } from "../../animation";

const initialState = {
    name: '',
    email: '',
    message: '',
}

const Contact = ({ toggle, isOpen }) => {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let key in state) {
      if (state[key] === "") {
        setError(`You must provide the ${key}`);
      }
    }
  };

  const handleInput = (e) => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;
    setState((prev) => ({ ...prev, [inputName]: value }));
  };
  return (
    <FormContainer variants={pageAnimation} isOpen={isOpen} toggle={toggle}>
      <NavBar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <StyledFormWrapper variants={pageAnimation}>
        <StyledForm onSubmit={handleSubmit}>
          <h2>Contact Form</h2>
          <label htmlFor="name">Name</label>
          <StyledInput
            type="text"
            name="name"
            value={state.name}
            onChange={handleInput}
          />
          <label htmlFor="email">Email</label>
          <StyledInput
            type="email"
            name="email"
            value={state.email}
            onChange={handleInput}
          />
          <label htmlFor="message">Message</label>
          <StyledTextArea
            name="message"
            value={state.message}
            onChange={handleInput}
          />
          {error && (
            <StyledError>
              <p>{error}</p>
            </StyledError>
          )}
          <StyledButton type="submit">Send Message</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </FormContainer>
  );
};

export default Contact;
