import { Link } from 'gatsby';
import React from 'react';
import { Layout } from '../components/layout';
import { Seo } from '../components/seo';

export default function About() {
  return (
    <Layout>
      <Seo title="About" />
      <h1>About</h1>
      <p>Welcome to the about page.</p>
      <Link to="/">Go back to the homepage.</Link>
    </Layout>
  );
}
