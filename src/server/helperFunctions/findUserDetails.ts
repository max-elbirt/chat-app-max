import {mockUserDetails} from "../mockUserDetails";
import {User} from "../../types/user";
import {json} from "express";

export const findUserDetails = (idNumber: number) => {
    console.log('looking for user details');
    return mockUserDetails.find(user => user.id === idNumber);
}