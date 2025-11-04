import * as menuService from '../services/menuService.js';
import { sendResponse } from '../utils/responseHandler.js';

export const createMenu = async (req, res, next) => {
    try {
        const tenantId = req.user.tenantId;

    } catch (err) {
        next(err);
    }
};

export const getMenu = async (req, res, next) => { };