interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'MJI79Vb2ehB828jwYwyhGn5hgoJL7DaD',
  CLIENT_DOMAIN: 'msctech.auth0.com',
  AUDIENCE: 'concat-test-api',
  REDIRECT: 'https://con-cat.herokuapp.com/callback',
  SCOPE: 'openid'
};
