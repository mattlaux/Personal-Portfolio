/**
 * Establishes default settings for the seo component
 * https://cheatcode.co/tutorials/how-to-handle-seo-metadata-in-next-js
 *
 * TODOS:
 *  1. Update social twitter to proper values
 */
const settings = {
  /*
  graphql: {
    uri: 'http://localhost:5001/api/graphql',
  },
  */
  meta: {
    rootUrl: 'https://retailalgotrader',
    title: 'RetailAlgoTrader',
    description:
      'Discover how to intelligently and profitably trade as a retail algorithmic trader',
    social: {
      graphic: 'https://ezmto.com/images/website/bullTraderSocial.webp',
      twitter: 'RetailAlgoTrade',
    },
  },
};

export default settings;
