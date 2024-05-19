import { UserProfile } from "./UserProfile";

// SubClass Prototype
export class PremiumUserProfile extends UserProfile{
    private subLvl: string;

    constructor(username:  string, subLvl: string){
        super(username);
        this.subLvl = subLvl;
    }
    clone(): PremiumUserProfile{
        return new PremiumUserProfile(this.getUsername(),this.subLvl);
    }
    getSubLvl(): string{
        return this.subLvl;
    }
}