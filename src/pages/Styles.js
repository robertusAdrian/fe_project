import styled from "styled-components";

export const Container = styled.div`
  min-height: 600px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #00ff00;
`;

export const FromWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #010101;
  height: auto;
  width: 100%;
  height: auto;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const Formh1 = styled.h1`
  margin-bottom: 38px;
  color: #fff;
  font-size: 2.5rem;
  font-weight: 500;
  text-align: center;
`;

export const Formh2 = styled.h2`
  margin-bottom: 10px;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 300;
  text-align: center;
`;
