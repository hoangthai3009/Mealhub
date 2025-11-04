import Tenant from "../models/Tenant.js";
import User from "../models/User.js";

export const createTenantWithAdmin = async (name, email, password) => {
    if (!name || !email || !password) {
        throw new Error("Thiếu thông tin đăng ký");
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) throw new Error("Email đã được sử dụng");

    const tenant = await Tenant.create({ name });

    const admin = await User.create({
        tenant: tenant._id,
        email,
        password,
        role: "ADMIN",
    });
    return { tenant, admin };
}
