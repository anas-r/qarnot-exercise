import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';

import MaterialDao from '@daos/Material/MaterialDao.mock';
import { ERR_MISSING_PARAM, ERR_NOT_FOUND } from '@shared/constants';

const materialDao = new MaterialDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;



/**
 * Get all materials.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function getAllMaterials(req: Request, res: Response) {
    const materials = await materialDao.getAll();
    return res.status(OK).json({materials});
}


/**
 * Get one material.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
 export async function getOneMaterial(req: Request, res: Response) {
    const { id } = req.params;
    const id_material = Number(id)
    const material = await materialDao.getOne(id_material);
    if (!material) {
        return res.status(BAD_REQUEST).json({
            error: ERR_NOT_FOUND,
        });
    }
    return res.status(OK).json({material})
}


/**
 * Add one material.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function addOneMaterial(req: Request, res: Response) {
    const { material } = req.body;
    if (!material) {
        return res.status(BAD_REQUEST).json({
            error: ERR_MISSING_PARAM,
        });
    }
    await materialDao.add(material);
    return res.status(CREATED).end();
}


/**
 * Update one material.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function updateOneMaterial(req: Request, res: Response) {
    const { material } = req.body;
    if (!material) {
        return res.status(BAD_REQUEST).json({
            error: ERR_MISSING_PARAM,
        });
    }
    material.id = Number(material.id);
    await materialDao.update(material);
    return res.status(OK).end();
}


/**
 * Delete one material.
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export async function deleteOneMaterial(req: Request, res: Response) {
    const { id } = req.params;
    await materialDao.delete(Number(id));
    return res.status(OK).end();
}
