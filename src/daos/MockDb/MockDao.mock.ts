import jsonfile from 'jsonfile';
import { IMaterial } from '@entities/Material';
import { IRockType } from '@entities/RockType';
import { IRock } from '@entities/Rock';


interface IDatabase {
    materials: IMaterial[];
    rockTypes: IRockType[];
    rocks: IRock[];
}


class MockDaoMock {

    private readonly dbFilePath = 'src/daos/MockDb/MockDb.json';

    protected openDb(): Promise<IDatabase> {
        return jsonfile.readFile(this.dbFilePath) as Promise<IDatabase>;
    }

    protected saveDb(db: IDatabase): Promise<void> {
        return jsonfile.writeFile(this.dbFilePath, db);
    }
}

export default MockDaoMock;
