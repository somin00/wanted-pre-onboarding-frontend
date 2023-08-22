import styled from 'styled-components';

export const TodoItemWrapper = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  label {
    display: flex;
    align-items: center;
  }

  span {
    width: 320px;
    font-size: 1.2rem;
    margin-right: 15px;
    height: 32px;
    line-height: 32px;
  }

  input[type='text'] {
    width: 320px;
    border: 1px solid gray;
    border-radius: 4px;
    margin-right: 15px;
    padding: 4px 0 4px 4px;
    font-size: 1.2rem;
  }

  input[type='checkbox'] {
    margin-right: 10px;
    width: 20px;
    height: 20px;
  }

  button {
    background-color: #c4d7b2;
    font-size: 1.2rem;
    padding: 4px 4px;
    border-radius: 8px;
    margin-right: 4px;
  }
`;
