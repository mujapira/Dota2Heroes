import styled from "styled-components";

export const Container = styled.a`
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  height: 250px;
  width: 310px;
  background-color: black;
  border-radius: 2%;
  margin-bottom: 10px;
`;

export const ContainerImg = styled.img`
  margin: 20px 20px 45px;
  display: flex;
  height: 200px;
  width: 300px;
`;

export const Tittle = styled.h1`
  margin-top: 15px;
  margin-left: 20px;
  color: white;
  font-size: 32px;
  font-weight: 500;
`;

export const Stats = styled.div`
  position: absolute;
  background: black;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.4s;
  ${Container}:hover & {
    opacity: 0.81;
  }
`;

export const Attribute = styled.p`
margin: 6px;
color: white;
font-size: 20px;
font-weight: 300;
`;

export const AttributeTitle = styled.b`
  margin: 6px;
  color: white;
  font-size: 20px;
  font-weight: 600;
  `;
  
