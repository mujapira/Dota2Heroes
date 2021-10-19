import styled from "styled-components";

export const List = styled.ul`
  margin-top: 100px;
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  flex-wrap: wrap;
`;

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  height: 400px;
  width: 300px;
  background-color: black;
  border-radius: 5%;
`;

export const ContainerImg = styled.img`
  margin: 20px 20px 45px;
  display: flex;
  height: 200px;
  width: 300px;
`;

export const Tittle = styled.h1`
  margin-left: 20px;
  color: white;
  font-size: 32px;
  font-weight: 500;
  color: white;
`;
