import jwt from "jsonwebtoken";

export function userMiddleware (req, res, next) {
const token = req.cookies.jwt; //get from cookie

if (!token) {
return res.status(401).json({ error: "Login first" });
}
try {
const decoded = jwt.verify (token, process.env.SECRET);
req.userId = decoded.id;
next();
} catch (err) {
return res.status(401).json({ error: "Invalid token" });
}
}