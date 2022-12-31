"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserDetails = void 0;
const mockUserDetails_1 = require("../mockUserDetails");
const findUserDetails = (idNumber) => {
    console.log('looking for user details');
    return mockUserDetails_1.mockUserDetails.find(user => user.id === idNumber);
};
exports.findUserDetails = findUserDetails;
