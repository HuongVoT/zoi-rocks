import { ResourcesConfig } from "aws-amplify";

export const amplifyConfig: ResourcesConfig = {
  Auth: {
    Cognito: {
      userPoolClientId: import.meta.env.VITE_USER_POOL_CLIENT_ID,
      userPoolId: import.meta.env.VITE_USER_POOL_ID,
      loginWith: {
        oauth: {
          domain: import.meta.env.VITE_OAUTH_DOMAIN,
          scopes: [
            "openid",
            "email",
            "profile",
            "aws.cognito.signin.user.admin",
          ],
          redirectSignIn: [
            import.meta.env.VITE_WEB_APP_URL,
            `${import.meta.env.VITE_WEB_APP_URL}/kudos-album`,
            `${import.meta.env.VITE_WEB_APP_URL}/rock-stars`,
          ],
          redirectSignOut: [
            import.meta.env.VITE_WEB_APP_URL,
            `${import.meta.env.VITE_WEB_APP_URL}/login`,
          ],
          responseType: "token",
        },
        username: false,
        email: true,
        phone: false,
      },
    },
  },
};
