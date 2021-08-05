import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';

import RockDao from '@daos/Rock/RockDao.mock';
import { ERR_MISSING_PARAM, ERR_NOT_FOUND } from '@shared/constants';

const rockDao = new RockDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;



/**
 * Get all rocks.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function getAllRocks(req: Request, res: Response) {
    const { rockType, material } = req.query;
    let rocks = await rockDao.getAll();
    if (rockType) {
        rocks = rocks.filter((r) => r.rockType.toString() === rockType.toString())
    }
    if (material) {
        rocks = rocks.filter((r) => r.material.toString() === material.toString())
    }
    return res.status(OK).json({rocks});
}


/**
 * Get one rock.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
 export async function getOneRock(req: Request, res: Response) {
    const { id } = req.params;
    const rock = await rockDao.getOne(Number(id));
    if (!rock) {
        return res.status(BAD_REQUEST).json({
            error: ERR_NOT_FOUND,
        });
    }
    return res.status(OK).json({rock})
}


/**
 * Add one rock.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function addOneRock(req: Request, res: Response) {
    const { rock } = req.body;
    if (!rock) {
        return res.status(BAD_REQUEST).json({
            error: ERR_MISSING_PARAM,
        });
    }
    await rockDao.add(rock);
    return res.status(CREATED).end();
}


/**
 * Update one rock.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function updateOneRock(req: Request, res: Response) {
    const { rock } = req.body;
    if (!rock) {
        return res.status(BAD_REQUEST).json({
            error: ERR_MISSING_PARAM,
        });
    }
    rock.id = Number(rock.id);
    await rockDao.update(rock);
    return res.status(OK).end();
}


/**
 * Delete one rock.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function deleteOneRock(req: Request, res: Response) {
    const { id } = req.params;
    await rockDao.delete(Number(id));
    return res.status(OK).end();
}
