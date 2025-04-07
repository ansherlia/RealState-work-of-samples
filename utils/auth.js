const { hash, compare } = require("bcryptjs");

const hashedPassword = async (password) => {
  const hashed = await hash(password, 12);
  return hashed;
};

const verifyPassword = async (password, hashedPass) => {
  try {
    const verify = await compare(password, hashedPass);
    return verify;
  } catch (error) {
    console.log(error);
  }
};

export { hashedPassword, verifyPassword };
