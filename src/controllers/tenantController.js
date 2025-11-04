import * as tenantService from "../services/tenantService.js";
import { sendResponse } from "../utils/responseHandler.js";

export const registerTenant = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        const { tenant, admin } = await tenantService.createTenantWithAdmin(name, email, password);

        return sendResponse(res, 201, "Đăng ký doanh nghiệp thành công", {
            tenant: { id: tenant._id, name: tenant.name },
            admin: { email: admin.email, role: admin.role },
        });
    } catch (err) {
        next(err);
    }
};