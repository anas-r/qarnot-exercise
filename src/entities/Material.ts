export interface IMaterial {
    id: number;
    name: string;
    strengthIndex: number;
    tightnessIndex: number;
    description: string;
}

class Material implements IMaterial {

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

export default Material;