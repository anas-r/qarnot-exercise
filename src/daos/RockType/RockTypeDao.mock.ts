import { IRockType } from '@entities/RockType';
import { getRandomInt } from '@shared/functions';
import { IRockTypeDao } from './RockTypeDao';
import MockDaoMock from '../MockDb/MockDao.mock';



class RockTypeDao extends MockDaoMock implements IRockTypeDao {

    public async getOne(id: number): Promise<IRockType | null> {
        const db = await super.openDb();
        for (const rockType of db.rockTypes) {
            if (rockType.id === id) {
                return rockType;
            }
        }
        return null;
    }


    public async getAll(): Promise<IRockType[]> {
        const db = await super.openDb();
        return db.rockTypes;
    }


    public async add(rockType: IRockType): Promise<void> {
        const db = await super.openDb();
        rockType.id = getRandomInt();
        db.rockTypes.push(rockType);
        await super.saveDb(db);
    }


    public async update(rockType: IRockType): Promise<void> {
        const db = await super.openDb();
        for (let i = 0; i < db.rockTypes.length; i++) {
            if (db.rockTypes[i].id === rockType.id) {
                db.rockTypes[i] = rockType;
                await super.saveDb(db);
                return;
            }
        }
        throw new Error('RockType not found');
    }


    public async delete(id: number): Promise<void> {
        const db = await super.openDb();
        for (let i = 0; i < db.rockTypes.length; i++) {
            if (db.rockTypes[i].id === id) {
                db.rockTypes.splice(i, 1);
                await super.saveDb(db);
                return;
            }
        }
        throw new Error('RockType not found');
    }
}

export default RockTypeDao;
