import React from 'react';
import { Global, css } from '@emotion/react';
import Header from './header';

const Layout = ({ children }) => (
  <>
    {/* Global is a react component that emotion give us globally scoped css*/}
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
        }
        /* The 'lobotomised owl selecter' - every sibling selector will receive this style */
        * + * {
          margin-top: 1rem;
        }

        html,
        body {
          margin: 0 auto;
          max-width: 1200px;
          color: #555;
          font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,
            -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
            Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,
            'Segoe UI', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,
            Arial, Helvetica, sans-serif, Arial, Helvetica, sans-serif,
            sans-serif;
          font-size: 18px;
          line-height: 1.4;

          /* TODO: remove margin for main div that gatsby mounts into */
          > {
            margin-top: 0;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #222;
            line-height: 1.1;

            // anything that comes after a heading
            + * {
              margin-top: 0.5rem;
            }
          }

          strong {
            color: #222;
          }

          li {
            margin-top: 0.25rem;
          }
        }
      `}
    />
    <Header />
    <main>{children}</main>
  </>
);

export default Layout;
