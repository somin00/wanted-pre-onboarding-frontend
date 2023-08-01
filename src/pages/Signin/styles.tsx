import styled from "styled-components";
export const SigninWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 60px;
  }

  p {
    margin-bottom: 10px;
  }

  button {
    font-size: 1.2rem;
    background-color: #c4d7b2;
    width: 400px;
    padding: 10px 0;
    border-radius: 8px;

    &:disabled {
      background-color: gray;
      cursor: not-allowed;
    }
  }
`;
