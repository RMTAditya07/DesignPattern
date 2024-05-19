// import 'core-js';
import IPrototype from './iprototype'

export default class Document implements IPrototype{
    name: string;
    two_dim_array: [number[], number[]];

    constructor(name: string, two_dim_array: [number[],number[]]){
        this.name = name;
        this.two_dim_array = two_dim_array;
    }
    clone(mode: number): Document{
        let array;
        if(mode===2){

            let stringified = JSON.stringify(this.two_dim_array);
            console.log('stringified ' + stringified);
            //deep copy
            array = JSON.parse(stringified);
            console.log('array ' + array);
        }else{
            //shallow copy
            array = Object.assign([], this.two_dim_array);
        }
        return new Document(this.name, array);
    }
}