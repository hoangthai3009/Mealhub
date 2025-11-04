import Menu from "../models/Menu";

export const createMenuItem = async (tenantId, name, category, price, isAvailable) => {
    if (!name) throw new Error("Tên món ăn là bắt buộc");
    if (price == null) throw new Error("Giá món ăn là bắt buộc");