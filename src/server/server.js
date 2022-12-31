"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const attachNameToMessage_1 = require("./helperFunctions/attachNameToMessage");
const mockMessages_1 = require("./mockMessages");
const cors_1 = __importDefault(require("cors"));
const parseUsersForNameAndId_1 = require("./node_modules/parseUsersForNameAndId");
const findUserDetails_1 = require("./helperFunctions/findUserDetails");
const body_parser_1 = __importDefault(require("body-parser"));
const addNameToASingleMessage_1 = require("./helperFunctions/addNameToASingleMessage");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.get('/', (req, res) => {
    (0, attachNameToMessage_1.attachNameToMessage)();
    res.status(200).send(mockMessages_1.mockMessages);
});
app.get('/users', (req, res) => {
    res.status(200).send((0, parseUsersForNameAndId_1.parseUsersForNameAndId)());
});
app.get('/details', (req, res) => {
    const { id } = req.query;
    const result = (0, findUserDetails_1.findUserDetails)(+id);
    res.status(200).send(result);
});
app.post('/messages', (req, res) => {
    let messageData = req.body;
    messageData = Object.assign(Object.assign({}, messageData), { likes: [] });
    messageData = Object.assign(Object.assign({}, messageData), { name: (0, addNameToASingleMessage_1.addNameToASingleMessage)(messageData.authorId).name });
    mockMessages_1.mockMessages.push(messageData);
    console.log(messageData);
});
app.post('/likes', (req, res) => {
    const likeReq = req.body;
    const messageNum = likeReq.messageId;
    const likeStatus = likeReq.like;
    console.log('index is:', messageNum - 1);
    likeStatus ? mockMessages_1.mockMessages[messageNum - 1].likes.pop()
        : mockMessages_1.mockMessages[messageNum - 1].likes.push(mockMessages_1.mockMessages[messageNum - 1].likes.length + 1);
    console.log(mockMessages_1.mockMessages[messageNum - 1]);
});
app.listen(3005, () => {
    console.log('server is running on port 3005');
});
