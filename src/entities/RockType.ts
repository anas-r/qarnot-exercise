export interface IRockType {
    id: number;
    name: string;
    strengthIndex: number;
    tightnessIndex: number;
    description: string;
}

class RockType implements IRockType {

    public id: number;
    public name: string;
    public strengthIndex: number;
    public tightnessIndex: number;
    public description: string;

    constructor(
        id: number, 
        name: string, 
        strengthIndex: number, 
        tightnessIndex: number, 
        description: string
        ) {
        this.id = id;
        this.name = name;
        this.strengthIndex = strengthIndex;
        this.tightnessIndex = tightnessIndex;
        this.description = description;
    }
}

export default RockType;