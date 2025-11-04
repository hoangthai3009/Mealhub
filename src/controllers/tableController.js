import * as tableService from "../services/tableService.js";
import { sendResponse } from "../utils/responseHandler.js";

export const createTables = async (req, res, next) => {
  try {
    const tenantId = req.user.tenantId;
    const { quantity, type } = req.body;

    const tables = await tableService.createTables(tenantId, quantity, type);

    return sendResponse(res, 201, `Tạo ${quantity} bàn thành công`, tables);
  } catch (err) {
    next(err);
  }
};

export const getTables = async (req, res, next) => {
  try {
    const tenantId = req.user.tenantId;
    const tables = await tableService.getTables(tenantId);

    return sendResponse(res, 200, "Lấy danh sách bàn thành công", tables);
  } catch (err) {
    next(err);
  }
};

export const updateTable = async (req, res, next) => {
  try {
    const tenantId = req.user.tenantId;
    const { id } = req.params;
    const updated = await tableService.updateTable(tenantId, id, req.body);

    return sendResponse(res, 200, "Cập nhật bàn thành công", updated);
  } catch (err) {
    next(err);
  }
};

export const deleteTable = async (req, res, next) => {
  try {
    const tenantId = req.user.tenantId;
    const { id } = req.params;
    await tableService.deleteTable(tenantId, id);

    return sendResponse(res, 200, "Đã xóa bàn thành công");
  } catch (err) {
    next(err);
  }
};
