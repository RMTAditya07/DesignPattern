import { UserProfile } from "./UserProfile";
import { PremiumUserProfile } from "./PremiumUserProfile";

const basicUser = new UserProfile("Ibrahim");
// Basic User  :Ibrahim
console.log("Basic User: ",basicUser.getUsername())

const clonedBasicUser = basicUser.clone()
// Cloned Basic User
console.log("Cloned Basic User: ",clonedBasicUser.getUsername());

const premiumUser = new PremiumUserProfile(clonedBasicUser.getUsername(),"Premium")
// Premium User : Ibrahim - Premium
console.log("Premium User: ",premiumUser.getUsername(),"-",premiumUser.getSubLvl())
