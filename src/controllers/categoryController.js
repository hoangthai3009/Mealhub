import * as categoryService from "../services/categoryService.js";
import { sendResponse } from "../utils/responseHandler.js";

export const createCategory = async (req, res, next) => {
    try {
        const tenantId = req.user.tenantId;
        const { name, description, order } = req.body;

        const category = await categoryService.createCategory(tenantId, name, description, order);

        return sendResponse(res, 201, "Tạo danh mục thành công", category);
    } catch (err) {
        next(err);
    }
};

export const getCategories = async (req, res, next) => {
    try {
        const tenantId = req.user.tenantId;
        const categories = await categoryService.getCategories(tenantId);

        return sendResponse(res, 200, "Lấy danh sách danh mục thành công", categories);
    } catch (err) {
        next(err);
    }
};

export const updateCategory = async (req, res, next) => {
    try {
        const tenantId = req.user.tenantId;
        const id = req.params.id;

        const updated = await categoryService.updateCategory(tenantId, id, req.body);

        return sendResponse(res, 200, "Cập nhật danh mục thành công", updated);
    } catch (err) {
        next(err);
    }
};

export const deleteCategory = async (req, res, next) => {
    try {
        const tenantId = req.user.tenantId;
        const id = req.params.id;

        await categoryService.deleteCategory(tenantId, id);

        return sendResponse(res, 200, "Đã xóa danh mục thành công");
    } catch (err) {
        next(err);
    }
};
