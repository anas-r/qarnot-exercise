import { IMaterial } from "@entities/Material";
import { IRock } from "@entities/Rock";
import { IRockType } from "@entities/RockType";

declare module 'express' {
    export interface Request  {
        body: {
            material: IMaterial,
            rockType: IRockType,
            rock: IRock
        };
    }
}
