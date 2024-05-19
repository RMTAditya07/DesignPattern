import { IUserPrototype } from "./IUserPrototype";

// Concrete Prototype
export class UserProfile implements IUserPrototype{
    private username: string;

    constructor(username: string){
        this.username = username;
    }
    clone(): UserProfile{
        return new UserProfile(this.username);
    }
    getUsername() : string{
        return this.username;
    }
}
