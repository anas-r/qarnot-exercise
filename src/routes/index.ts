/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-misused-promises */

import { Router } from 'express';
import { getAllMaterials, getOneMaterial, addOneMaterial, updateOneMaterial, deleteOneMaterial } from './Materials';
import { getAllRockTypes, getOneRockType, addOneRockType, updateOneRockType, deleteOneRockType } from './RockTypes';
import { getAllRocks, getOneRock, addOneRock, updateOneRock, deleteOneRock } from './Rocks';

// Material router
const materialRouter = Router();
materialRouter.get('/', getAllMaterials);
materialRouter.get('/:id', getOneMaterial);
materialRouter.post('/add', addOneMaterial);
materialRouter.put('/update', updateOneMaterial);
materialRouter.delete('/delete/:id', deleteOneMaterial);

// RockType router
const rockTypeRouter = Router();
rockTypeRouter.get('/', getAllRockTypes);
rockTypeRouter.get('/:id', getOneRockType);
rockTypeRouter.post('/add', addOneRockType);
rockTypeRouter.put('/update', updateOneRockType);
rockTypeRouter.delete('/delete/:id', deleteOneRockType);

// Rock router
const rockRouter = Router();
rockRouter.get('/', getAllRocks);
rockRouter.get('/:id', getOneRock);
rockRouter.post('/add', addOneRock);
rockRouter.put('/update', updateOneRock);
rockRouter.delete('/delete/:id', deleteOneRock);


// Export the base-router
const baseRouter = Router();
baseRouter.use('/materials', materialRouter);
baseRouter.use('/rockTypes', rockTypeRouter);
baseRouter.use('/rocks', rockRouter);
export default baseRouter;
