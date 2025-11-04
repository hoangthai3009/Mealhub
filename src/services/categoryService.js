import Category from "../models/Category.js";

export const createCategory = async (tenantId, name, description, order) => {
    if (!name) throw new Error("Tên danh mục là bắt buộc");

    const category = await Category.create({
        tenant: tenantId,
        name,
        description,
        order,
    });
    return category;
};

export const getCategories = async (tenantId) => {
    return await Category.find({ tenant: tenantId }).sort({ order: 1 });
};

export const updateCategory = async (tenantId, id, updateData) => {
    const category = await Category.findOneAndUpdate(
        { _id: id, tenant: tenantId },
        { $set: updateData },
        { new: true }
    );

    if (!category) throw new Error("Không tìm thấy danh mục");
    return category;
};

export const deleteCategory = async (tenantId, id) => {
    const deleted = await Category.findOneAndDelete({ _id: id, tenant: tenantId });
    if (!deleted) throw new Error("Không tìm thấy danh mục để xóa");
    return deleted;
};
