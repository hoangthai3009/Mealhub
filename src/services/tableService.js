import Table from "../models/Table.js";

export const createTables = async (tenantId, quantity, type) => {
    if (!quantity || quantity <= 0) {
        throw new Error("Số lượng bàn không hợp lệ");
    }

    const existingTables = await Table.find({ tenant: tenantId });
    const startNumber = existingTables.length + 1;

    const tables = Array.from({ length: quantity }, (_, i) => ({
        tenant: tenantId,
        number: startNumber + i,
        type: type || "NORMAL",
    }));

    return await Table.insertMany(tables);
};

export const getTables = async (tenantId) => {
    return await Table.find({ tenant: tenantId }).sort({ number: 1 });
};

export const updateTable = async (tenantId, id, updateData) => {
    const table = await Table.findOneAndUpdate(
        { _id: id, tenant: tenantId },
        { $set: updateData },
        { new: true }
    );

    if (!table) throw new Error("Không tìm thấy bàn");
    return table;
};

export const deleteTable = async (tenantId, id) => {
    const deleted = await Table.findOneAndDelete({ _id: id, tenant: tenantId });
    if (!deleted) throw new Error("Không tìm thấy bàn để xóa");
    return deleted;
};
