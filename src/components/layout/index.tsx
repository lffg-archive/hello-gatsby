import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import './normalize.css';
import './app.css';

const PAGE_QUERY = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  const data = useStaticQuery(PAGE_QUERY);
  const { title, author } = data.site.siteMetadata;

  return (
    <div className="app">
      <header className="app__header">
        <strong>{title}</strong>
      </header>
      <main className="app__container">{children}</main>
      <footer className="app__footer">
        © {author} &middot; Built with Gatsby
      </footer>
    </div>
  );
}
