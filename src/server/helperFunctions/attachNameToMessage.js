"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachNameToMessage = void 0;
const mockMessages_1 = require("../mockMessages");
const mockUserDetails_1 = require("../mockUserDetails");
const attachNameToMessage = (messages = mockMessages_1.mockMessages) => {
    messages.map((message) => {
        mockUserDetails_1.mockUserDetails.forEach((user) => {
            if (user.id === message.authorId) {
                message.authorName = user.name;
            }
        });
    });
};
exports.attachNameToMessage = attachNameToMessage;
