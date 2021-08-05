import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';

import RockTypeDao from '@daos/RockType/RockTypeDao.mock';
import { ERR_MISSING_PARAM, ERR_NOT_FOUND } from '@shared/constants';

const rockTypeDao = new RockTypeDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;



/**
 * Get all rockTypes.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function getAllRockTypes(req: Request, res: Response) {
    const rockTypes = await rockTypeDao.getAll();
    return res.status(OK).json({rockTypes});
}


/**
 * Get one rock.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
 export async function getOneRockType(req: Request, res: Response) {
    const { id } = req.params;
    const id_rock = Number(id)
    const rock = await rockTypeDao.getOne(id_rock);
    if (!rock) {
        return res.status(BAD_REQUEST).json({
            error: ERR_NOT_FOUND,
        });
    }
    return res.status(OK).json({rock})
}


/**
 * Add one rockType.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function addOneRockType(req: Request, res: Response) {
    const { rockType } = req.body;
    if (!rockType) {
        return res.status(BAD_REQUEST).json({
            error: ERR_MISSING_PARAM,
        });
    }
    await rockTypeDao.add(rockType);
    return res.status(CREATED).end();
}


/**
 * Update one rockType.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function updateOneRockType(req: Request, res: Response) {
    const { rockType } = req.body;
    if (!rockType) {
        return res.status(BAD_REQUEST).json({
            error: ERR_MISSING_PARAM,
        });
    }
    rockType.id = Number(rockType.id);
    await rockTypeDao.update(rockType);
    return res.status(OK).end();
}


/**
 * Delete one rockType.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function deleteOneRockType(req: Request, res: Response) {
    const { id } = req.params;
    await rockTypeDao.delete(Number(id));
    return res.status(OK).end();
}
