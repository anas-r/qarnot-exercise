import { IRock } from "@entities/Rock";

export interface IRockDao {
    getOne: (id: number) => Promise<IRock | null>;
    getAll: () => Promise<IRock[]>;
    add: (rock: IRock) => Promise<void>;
    update: (rock: IRock) => Promise<void>;
    delete: (id: number) => Promise<void>;
}