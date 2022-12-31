"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNameToASingleMessage = void 0;
const mockUserDetails_1 = require("../mockUserDetails");
const addNameToASingleMessage = (idNumber) => {
    return mockUserDetails_1.mockUserDetails.find(user => user.id === idNumber);
};
exports.addNameToASingleMessage = addNameToASingleMessage;
