import styled from "styled-components";

export const WrapperLayout = styled.section`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 90px;
  background-color: black;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  max-width: 70px;
  max-height: 70px;
  min-width: 35px;
  min-height: 35px;
  
`;

export const Tittle = styled.h1`
margin-left: 20px;
  color: white;
  font-size: 32px;
  font-weight: 500;
`;

export const SubTittle = styled.h2`
margin-left: 20px;
  color: white;
  font-size: 32px;
  font-weight: 500;
`;
