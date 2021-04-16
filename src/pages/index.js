import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Hero from '../components/hero';

export default () => (
  <>
    <Hero />
    <Layout>
      <h1>Home</h1>
      <p>Welcome to the site</p>
      <Link to="/about/">&rarr; Learn about me</Link>
    </Layout>
  </>
);
