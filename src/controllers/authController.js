import * as authService from "../services/authService.js";
import { sendResponse } from "../utils/responseHandler.js";

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const { accessToken, userInfo } = await authService.login(email, password);

        return sendResponse(res, 200, "Đăng nhập thành công", {
            accessToken,
            user: userInfo,
        });
    } catch (err) {
        next(err);
    }
};
