import { IRockType } from "@entities/RockType";

export interface IRockTypeDao {
    getOne: (id: number) => Promise<IRockType | null>;
    getAll: () => Promise<IRockType[]>;
    add: (rockType: IRockType) => Promise<void>;
    update: (rockType: IRockType) => Promise<void>;
    delete: (id: number) => Promise<void>;
}