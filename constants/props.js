const URL = {
  FRONT_END: 'https://www.phptravels.net/login',
  ADMIN: 'https://www.phptravels.net/admin',
};

const EMAIL = {
  FRONT_END: 'user@phptravels.com',
  ADMIN: 'admin@phptravels.com',
};

const PASSWORD = {
  FRONT_END: 'demouser',
  ADMIN: 'demoadmin',
};

const PAGE_TITLE = {
  FRONT_END: 'Login',
  ADMIN: 'Administator Login',
}

Object.freeze(URL);
Object.freeze(EMAIL);
Object.freeze(PASSWORD);
Object.freeze(PAGE_TITLE);

export {URL, EMAIL, PASSWORD, PAGE_TITLE};
