import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      color: #eee;
      font-size: 24px;
      margin: 0 15px;
    }

    button {
      align-self: center;
      margin: 5px 0 0;
      width: 150%;
      height: 30px;
      border: 0;
      font-weight: bold;
      font-size: 15px;
      border-radius: 9%;
      color: #eee;
      background: #d44059;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.07, '#d44059')};
      }
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Meetup = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.2);

  strong {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
  }

  aside {
    display: flex;
    align-items: center;
    align-self: center;

    span {
      color: #666;
    }

    button {
      margin-left: 20px;
      border: 0;
      background: 0;
    }
  }
`;
