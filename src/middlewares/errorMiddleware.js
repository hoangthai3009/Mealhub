import { sendError } from "../utils/responseHandler.js";

export const errorHandler = (err, req, res, next) => {
    console.error("🔥 Error:", err.stack);

    const statusCode = err.status || 500;
    const message = err.message || "Internal Server Error";

    return sendError(res, statusCode, message);
};
