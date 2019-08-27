import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  button {
    border: 0;
    border-radius: 4px;
    padding: 12px 24px;
    font-size: 16px;
    line-height: 19px;
    color: #fff;
    font-weight: bold;
    background: #27ae60;
    &:disabled {
      cursor: not-allowed;
    }
  }
  button.edit {
    background: #4dbaf9;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    transition: background 0.2s linear;
    &:hover {
      background: ${darken(0.05, '#4dbaf9')};
    }
  }
  button.cancel {
    background: #d44059;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s linear;
    &:hover {
      background: ${darken(0.05, '#d44059')};
    }
  }
`;
export const Manager = styled.div`
  display: flex;
`;

export const Canceled = styled.div`
  font-size: 21px;
  line-height: 23px;
  color: #d44059;
`;
