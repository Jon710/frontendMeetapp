import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`;

export const Content = styled.div`
  div.image {
    width: 100%;
    display: flex;
    justify-content: center;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    box-shadow: 0 0px 15px rgba(113, 89, 193, 0.5);
  }
  img {
    height: 300px;
  }
  time {
    font-size: 16px;
    line-height: 19px;
    color: #fff;
    display: flex;
    align-items: center;
  }
  local {
    font-size: 16px;
    line-height: 19px;
    color: #fff;
    margin-top: 10px;
    display: flex;
    align-items: center;
  }
  ${props =>
    props.canceled &&
    css`
      opacity: 0.5;
    `}
`;
export const Title = styled.div`
  font-size: 32px;
  line-height: 37px;
  color: #fff;
  font-weight: bold;
  margin: 50px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Description = styled.div`
  margin: 25px 0px 30px;
  padding: 10px 15px;
  width: 100%;
  height: 128px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  font-size: 18px;
  line-height: 32px;
  color: #fff;
`;
