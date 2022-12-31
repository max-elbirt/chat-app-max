import {mockUserDetails} from "../mockUserDetails";
import {User} from "../../types/user" ;

export const addNameToASingleMessage = (idNumber: Number) => {
    return mockUserDetails.find(user => user.id === idNumber);
}