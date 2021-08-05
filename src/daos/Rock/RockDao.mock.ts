import { IRock } from '@entities/Rock';
import { getRandomInt } from '@shared/functions';
import { IRockDao } from './RockDao';
import MockDaoMock from '../MockDb/MockDao.mock';



class RockDao extends MockDaoMock implements IRockDao {

    public async getOne(id: number): Promise<IRock | null> {
        const db = await super.openDb();
        for (const rock of db.rocks) {
            if (rock.id === id) {
                return rock;
            }
        }
        return null;
    }


    public async getAll(): Promise<IRock[]> {
        const db = await super.openDb();
        return db.rocks;
    }


    public async add(rock: IRock): Promise<void> {
        const db = await super.openDb();
        rock.id = getRandomInt();
        db.rocks.push(rock);
        await super.saveDb(db);
    }


    public async update(rock: IRock): Promise<void> {
        const db = await super.openDb();
        for (let i = 0; i < db.rocks.length; i++) {
            if (db.rocks[i].id === rock.id) {
                db.rocks[i] = rock;
                await super.saveDb(db);
                return;
            }
        }
        throw new Error('Rock not found');
    }


    public async delete(id: number): Promise<void> {
        const db = await super.openDb();
        for (let i = 0; i < db.rocks.length; i++) {
            if (db.rocks[i].id === id) {
                db.rocks.splice(i, 1);
                await super.saveDb(db);
                return;
            }
        }
        throw new Error('Rock not found');
    }
}

export default RockDao;
