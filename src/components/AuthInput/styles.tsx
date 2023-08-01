import styled from "styled-components";

export const AuthInputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  label {
    width: 80px;
    text-align: left;
    font-size: 1.2rem;
    margin-right: 10px;
  }

  input {
    border: 1px solid gray;
    border-radius: 8px;
    width: 300px;
    height: 40px;
    font-size: 1.2rem;
  }
`;
