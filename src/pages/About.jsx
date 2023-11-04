import React from 'react';
import Sparky from '../img/sparky.jpg';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f7f7f7;
  margin-top: 90px;
  margin-left: 5px;
  margin-right: auto;
  max-width: 750px;
`;

const AboutImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
`;

const Subtitle = styled.h2`
  font-size: 22px;
  color: #666;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 18px;
  color: #999;
  margin-bottom: 10px;
  position: relative;

  &:after {
    content: '🌟';
    position: relative;
    right: 5px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #666;
  }
`;

const About = () => {
  return (
<AboutContainer>
  <AboutImage src={Sparky} alt="Momento Chispeante" />
  <Title>Acerca de Oportunidades Ilimitadas</Title>
  <Subtitle>Sé nuestro invitado</Subtitle>
  <Description>
    ¡Bienvenido a Oportunidades Ilimitadas! Nuestra misión es ofrecer servicios digitales de calidad, inspirar la creatividad, y proporcionar soluciones a través de una amplia gama de servicios remotos. 🚀
</Description><br />
<Description>
    ✨🎮Explora nuestro mundo digital y disfruta de servicios a medida diseñados por nuestro equipo de expertos, adaptados para todas tus necesidades y preferencias.
</Description><br />
<Description>
    Oportunidades Ilimitadas es mucho más que una agencia digital estándar. Conéctate con nosotros y sumérgete en un universo de innovación y creatividad. 🌐✨
</Description><br />
<Description>
    📚📱Elige entre una amplia gama de formatos y servicios: desarrollo web, marketing digital, diseño gráfico... y accede a soluciones efectivas en cualquier momento y lugar.
</Description><br />
<Description>
    Únete a nosotros en este emocionante viaje, donde tus proyectos pueden despegar y tus metas pueden alcanzarse. ¡Confía en Oportunidades Ilimitadas para un futuro digital exitoso! 💻🚀
</Description><br />
  <ButtonContainer>
    <Button href="/about-store">Saber más</Button>
  </ButtonContainer>
</AboutContainer>
  );
};

export default About;
