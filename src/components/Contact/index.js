import React, {useState} from "react";
import {
  StyledFormWrapper,
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledButton,
  StyledError,
} from "./FormElements";

const initialState = {
    name: '',
    email: '',
    message: '',
}

const Contact = () => {
    const [state, setState] = useState(initialState);
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        for (let key in state) {
            if (state[key] === '') {
                setError(`You must provide the ${key}`)
            }
        }
    }

    const handleInput = e => {
        const inputName = e.currentTarget.name
        const value = e.currentTarget.value
        setState(prev => ({...prev, [inputName]: value }))
    }
  return (
    <>
      <StyledFormWrapper>
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
    </>
  );
};

export default Contact;
