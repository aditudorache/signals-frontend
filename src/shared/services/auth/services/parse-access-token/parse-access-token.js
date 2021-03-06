const decodeToken = token => {
  try {
    return JSON.parse(window.atob(token.split('.')[1].replace('-', '+').replace('_', '/')));
    // disabled eslint rule because fix breaks test
    // eslint-disable-next-line unicorn/prefer-optional-catch-binding, no-unused-vars
  } catch (error) {
    return {};
  }
};

const parseAccessToken = token => {
  const content = decodeToken(token);
  return {
    issuer: content.iss, // the URL of the authorization endpoint
    name: content.sub, // a descriptive string for the end-user
    issuedAt: content.iat,
    notBefore: content.nbf,
    expiresAt: content.exp,
    jwtId: content.jti, // should be globally unique
    nonce: content.nonce,
    scopes: content.scopes, // list of scopes that this token provides access to
  };
};

export default parseAccessToken;
