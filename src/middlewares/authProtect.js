import jwt from "jsonwebtoken";
import { sendError } from "../utils/responseHandler.js";

export const protect = (...allowedRoles) => {
    return (req, res, next) => {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return sendError(res, 401, "Không có token hoặc token không hợp lệ");
        }

        const token = authHeader.split(" ")[1];

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;

            if (allowedRoles.length > 0 && !allowedRoles.includes(req.user.role)) {
                return sendError(res, 403, "Bạn không có quyền truy cập chức năng này");
            }

            next();
        } catch (err) {
            if (err.name === "TokenExpiredError") {
                return sendError(res, 401, "Token đã hết hạn, vui lòng đăng nhập lại");
            }
            return sendError(res, 403, "Token không hợp lệ");
        }
    };
};
