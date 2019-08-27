import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 300px;
      width: 600px;
      border-radius: 2%;
      opacity: 0.5;
    }

    input {
      display: none;
    }
  }
`;

export const SelectImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  strong {
    font-size: 20px;
    line-height: 23px;
    color: rgba(255, 255, 255, 0.3);
  }
`;
