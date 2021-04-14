import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  // 👆 the data that comes back will just be an object reflecting this structure
  // so what's above basically becomes the JSON object, e.g. we'll have data.site.siteMetadata.title, etc.

  return data.site.useSiteMetadata;
};

export default useSiteMetadata;
