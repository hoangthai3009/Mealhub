import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const login = async (email, password) => {
    if (!email || !password) {
        throw new Error("Thiếu email hoặc mật khẩu");
    }

    const user = await User.findOne({ email }).populate("tenant");
    if (!user) throw new Error("Không tìm thấy người dùng");

    const isMatch = await user.comparePassword(password);
    if (!isMatch) throw new Error("Sai mật khẩu hoặc email");

    const accessToken = jwt.sign(
        {
            id: user._id,
            role: user.role,
            tenantId: user.tenant?._id,
        },
        process.env.JWT_SECRET,
        { expiresIn: "15m" }
    );

    const userInfo = {
        email: user.email,
        role: user.role,
        tenant: user.tenant?.name,
    };

    return { accessToken, userInfo };
};
