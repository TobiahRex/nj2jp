import dotenv from 'dotenv';
import path from 'path';

dotenv.load({ path: path.resolve('.env') });

export default {
  production: {
    US_SQUARE_APPLICATION_ID: JSON.stringify(process.env.US_SQUARE_APPLICATION_ID_PROD),
    JP_SQUARE_APPLICATION_ID: JSON.stringify(process.env.JP_SQUARE_APPLICATION_ID_PROD),
    LAMBDA_ENV: JSON.stringify(process.env.LAMBDA_ENV_PROD),
    CLIENT_GRAPHQL_URL: JSON.stringify(process.env.CLIENT_GRAPHQL_URL_PROD),
    AUTH0_DOMAIN: JSON.stringify(process.env.AUTH0_DOMAIN_PROD),
    AUTH0_CLIENT_ID: JSON.stringify(process.env.AUTH0_CLIENT_ID_PROD),
    AUTH0_REDIRECT: JSON.stringify(process.env.AUTH0_REDIRECT_PROD),
    NODE_ENV: JSON.stringify(process.env.NODE_ENV_PROD),
    RECAPTCHA_KEY: JSON.stringify(process.env.RECAPTCHA_KEY_PROD),
    LINE_CHANNEL_ID: JSON.stringify(process.env.LINE_CHANNEL_ID_PROD),
    LINE_REDIRECT_URI: JSON.stringify(process.env.LINE_REDIRECT_URI_PROD),
    LINE_STATE: JSON.stringify(process.env.LINE_STATE_PROD),
    FACEBOOK_APP_ID: JSON.stringify(process.env.FACEBOOK_APP_ID_PROD),
    DISTRIBUTION_ID: JSON.stringify(process.env.DISTRIBUTION_ID_PROD),
  },
  troubleshoot: {
    US_SQUARE_APPLICATION_ID: JSON.stringify(process.env.US_SQUARE_APPLICATION_ID_TSH),
    JP_SQUARE_APPLICATION_ID: JSON.stringify(process.env.JP_SQUARE_APPLICATION_ID_TSH),
    LAMBDA_ENV: JSON.stringify(process.env.LAMBDA_ENV_TSH),
    CLIENT_GRAPHQL_URL: JSON.stringify(process.env.CLIENT_GRAPHQL_URL_TSH),
    AUTH0_DOMAIN: JSON.stringify(process.env.AUTH0_DOMAIN_TSH),
    AUTH0_CLIENT_ID: JSON.stringify(process.env.AUTH0_CLIENT_ID_TSH),
    AUTH0_REDIRECT: JSON.stringify(process.env.AUTH0_REDIRECT_TSH),
    NODE_ENV: JSON.stringify(process.env.NODE_ENV_TSH),
    RECAPTCHA_KEY: JSON.stringify(process.env.RECAPTCHA_KEY_TSH),
    LINE_CHANNEL_ID: JSON.stringify(process.env.LINE_CHANNEL_ID_TSH),
    LINE_REDIRECT_URI: JSON.stringify(process.env.LINE_REDIRECT_URI_TSH),
    LINE_STATE: JSON.stringify(process.env.LINE_STATE_TSH),
    FACEBOOK_APP_ID: JSON.stringify(process.env.FACEBOOK_APP_ID_TSH),
    DISTRIBUTION_ID: JSON.stringify(process.env.DISTRIBUTION_ID_TSH),
  },
};
