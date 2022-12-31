import {mockMessages} from "../mockMessages";
import {mockUserDetails} from "../mockUserDetails";
import {Message} from "../../types/message";
import {User} from "../../types/user";
export const attachNameToMessage = (messages: Array<Message> = mockMessages) => {
    messages.map((message) => {
        mockUserDetails.forEach((user) => {
            if (user.id === message.authorId) {
                message.authorName = user.name;
            }
        })
    })
}