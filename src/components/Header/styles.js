import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #000000;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #eee;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #eee;
    }
  }
`;

export const SignOut = styled.div`
  button {
    align-self: center;
    margin: 5px 0 0;
    width: 250%;
    height: 35px;
    border: 0;
    font-weight: bold;
    font-size: 15px;
    border-radius: 8%;
    color: #eee;
    background: #d44059;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.07, '#d44059')};
    }
  }
`;
