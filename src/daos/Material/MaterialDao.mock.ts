import { IMaterial } from '@entities/Material';
import { getRandomInt } from '@shared/functions';
import { IMaterialDao } from './MaterialDao';
import MockDaoMock from '../MockDb/MockDao.mock';



class MaterialDao extends MockDaoMock implements IMaterialDao {

    public async getOne(id: number): Promise<IMaterial | null> {
        const db = await super.openDb();
        for (const material of db.materials) {
            if (material.id === id) {
                return material;
            }
        }
        return null;
    }


    public async getAll(): Promise<IMaterial[]> {
        const db = await super.openDb();
        return db.materials;
    }


    public async add(material: IMaterial): Promise<void> {
        const db = await super.openDb();
        material.id = getRandomInt();
        db.materials.push(material);
        await super.saveDb(db);
    }


    public async update(material: IMaterial): Promise<void> {
        const db = await super.openDb();
        for (let i = 0; i < db.materials.length; i++) {
            if (db.materials[i].id === material.id) {
                db.materials[i] = material;
                await super.saveDb(db);
                return;
            }
        }
        throw new Error('Material not found');
    }


    public async delete(id: number): Promise<void> {
        const db = await super.openDb();
        for (let i = 0; i < db.materials.length; i++) {
            if (db.materials[i].id === id) {
                db.materials.splice(i, 1);
                await super.saveDb(db);
                return;
            }
        }
        throw new Error('Material not found');
    }
}

export default MaterialDao;
