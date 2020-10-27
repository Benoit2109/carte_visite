import React from "react";
import styled from "styled-components";

const Card = styled.div`
  height: 300px;
  width: 600px;
  border: solid;
  margin:3rem;
  border-width:1px;
  border-radius:5px;
  box-shadow: 4px 4px 4px grey;
  background-color:#ebf5fb;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
`;

const Left = styled.div``;

const Right = styled.div``;

const Top = styled.div`
display:flex;
justify-content:space-around;
margin:2rem 1rem 0 1rem;
`;

const Bottom = styled.div`
background-color:#2C3E50`;

const Name = styled.h1``;

const FirstName = styled.h2``;

const img = styled.img`
height:150px;
`

const Profession = styled.p``;

const Tools = styled.ul`
display:flex;
list-style:none`;

const Picture = styled.img`
height:200px;`;

const Contact = styled.p`
color:white;
`;

const CarteVisite = () => (
  <Card>
    <Top>
      <Left>
        <img
          src="https://lh3.googleusercontent.com/a-/AOh14GimrbPD1ok86IMxV9xkaiWIzlOnL7jwtZUeNhqJQQ=s192-c-rg-br100"
          alt="Benoit Le Bourdonnec"
        />
      </Left>
      <Right>
        <Name>LE BOURDONNEC</Name>
        <FirstName>Benoit</FirstName>
        <Profession>Developpeur Web Mobile</Profession>
      </Right>
    </Top>
    <Bottom>
      <Contact>benoitlb@me.com - 07 81 29 74 47</Contact>
    </Bottom>
  </Card>
);

export default CarteVisite;
