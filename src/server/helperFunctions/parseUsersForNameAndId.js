"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseUsersForNameAndId = void 0;
const mockUserDetails_1 = require("../mockUserDetails");
const parseUsersForNameAndId = () => {
    const userNameList = [];
    mockUserDetails_1.mockUserDetails.forEach((user) => {
        userNameList.push({ id: user.id, name: user.name });
    });
    return userNameList;
};
exports.parseUsersForNameAndId = parseUsersForNameAndId;
