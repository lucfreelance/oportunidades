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
      <AboutImage src={Sparky} alt="Sparky moment" />
      <Title>About Eldorado Book Store</Title>
      <Subtitle>Be our guest</Subtitle>
      <Description>
        Welcome to Eldorado! Our mission is to inspire, educate, and entertain through a curated collection of puzzles, games, challenges, coloring books and more;  🧩
      </Description><br />
      <Description>
      ✨🎮Dive into our virtual wonderland playground and explore a variety of mini-games designed by our talented team and suitable for all ages. 
      </Description><br />
      <Description>
        Eldorado-Store is more than just a place to find low-content activity books. Connect with fellow puzzle lovers and immerse yourself in the magical world of brain teasers and creativity. 🧩✨
      </Description><br />
      <Description>
      🎮📚Choose from a variety of content formats: Physical books, e-books, notebooks… and pick enjoyable activities anytime, anywhere. 
      </Description><br />
      <Description>
        Join us on this adventure, where your imagination can soar and your problem-solving skills can flourish. Embark on extraordinary journeys through the captivating low-content books at Eldorado Book Store!📚🏠
      </Description><br />
      <ButtonContainer>
        <Button href="/about-store">Learn more</Button>
      </ButtonContainer>
    </AboutContainer>
  );
};

export default About;
