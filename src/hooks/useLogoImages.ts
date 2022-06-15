import { graphql, useStaticQuery } from 'gatsby';

export const useLogoImages = () => {
  // Get SVG logo details using GraphQL
  const data = useStaticQuery(graphql`
    {
      logoImages: allFile(filter: {relativeDirectory: {eq: "images"}}) {
        results: edges {
          logo: node {
            name
            id
            publicURL
            relativePath
          }
        }
      }
    }
  `);

  // Sets the key and values of the dictionary to the logo name and detail respectively
  let logoImages = {};
  if (data) {
    data.logoImages.results.forEach(item => {
      const { name: logoName, ...logoDetails } = item.logo;
      logoImages[logoName] = logoDetails;
    });
  }

  return logoImages;
};

