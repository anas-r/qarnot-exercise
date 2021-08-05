import { IMaterial } from "@entities/Material";

export interface IMaterialDao {
    getOne: (id: number) => Promise<IMaterial | null>;
    getAll: () => Promise<IMaterial[]>;
    add: (material: IMaterial) => Promise<void>;
    update: (material: IMaterial) => Promise<void>;
    delete: (id: number) => Promise<void>;
}