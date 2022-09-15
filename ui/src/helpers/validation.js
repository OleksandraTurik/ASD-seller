const validation = {
  email: /[A-Za-z0-9]+@[a-z]+\.[a-z]{2,3}/,
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
};

export default validation;
