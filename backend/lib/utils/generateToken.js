import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true, //!prevents XSS attacks ie cross site scripting attacks
    sameSite: "strict", //!prevents CSRF attacks ie cross site request forgery attacks
    secure: process.env.NODE_ENV !== "development", //!cookie will only be sent in production mode
  });
};
