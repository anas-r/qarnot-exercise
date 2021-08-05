import Dimension from "@shared/types";
import State from "src/enums/State";

export interface IRock {
    id: number;
    rockType: number;
    material: number;
    dimensions: Dimension;
    state: State;
    color: string;
    weight: number;
    description: string;
    price: number;
}

class Rock implements IRock {

    public id: number;
    public rockType: number;
    public material: number;
    public dimensions: Dimension;
    public state: State;
    public color: string;
    public weight: number;
    public description: string;
    public price: number;

    constructor(
        id: number, 
        rockType: number, 
        material: number, 
        dimensions: Dimension, 
        state: State,
        color: string,
        weight: number,
        description: string,
        price: number
        ) {
        this.id = id;
        this.rockType = rockType;
        this.material = material;
        this.dimensions = dimensions;
        this.state = state;
        this.color = color;
        this.weight = weight;
        this.description = description;
        this.price = price;
    }
}

export default Rock;