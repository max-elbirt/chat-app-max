import {mockUserDetails} from "../mockUserDetails";
import {User} from "../../types/user";

interface UserShortDetails  {
     id: number;
     name: string;
}

export const parseUsersForNameAndId = () => {
    const userNameList:Array<UserShortDetails> = [];
    mockUserDetails.forEach((user:User) => {
        userNameList.push({id: user.id, name: user.name});
    })
    return userNameList;
}