import React from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery } from 'gatsby';
import beach from '../../images/beach.jpg';

const TextBox = styled.div`
  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
  }
  p,
  a {
    color: #222;
    margin-top: 0;
  }
  a {
    margin-top: 0.5rem;
  }
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "beach.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <>
      <img src={beach} alt="beach" fluid={image.sharp.fluid} />
      <TextBox>
        <h1>Gatsby site &hearts;</h1>
        <p>
          Hello world!<Link to="/about">Learn about me &rarr;</Link>
        </p>
      </TextBox>
    </>
  );
};

export default Hero;
