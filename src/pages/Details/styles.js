import styled from 'styled-components';

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

    aside {
      display: flex;
      align-items: center;
      align-self: center;
      padding: 20px;
      width: 20%;
      margin-left: 50px;
      font-weight: bold;
    }
  }

  h1 {
    color: #eee;
    font-size: 20px;
    margin-left: 150px;
    margin-top: 20px;
    font-weight: normal;
  }

  h2 {
    color: #666;
    font-size: 15px;
    margin-left: 150px;
    font-weight: normal;
  }

  img {
    align-self: center;
    height: 200px;
    width: 600px;
    border-radius: 2%;
  }
`;
