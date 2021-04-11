import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>Home</h1>
    <p>Welcome to the site</p>
    <Link to="/about/">&rarr; Learn about me</Link>
  </Layout>
);
