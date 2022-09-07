import jsonwebtoken from "jsonwebtoken";

const generateToken = async (id) => {
  const token = await jsonwebtoken.sign({ id }, process.env.JWT_KEY, {
    expiresIn: "30d",
  });
  return token;
};

export default generateToken;
