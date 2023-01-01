import express, {query} from 'express';
import {attachNameToMessage} from "./helperFunctions/attachNameToMessage";
import {mockMessages} from "./mockMessages";
import cors from 'cors';
import {parseUsersForNameAndId} from "./helperFunctions/parseUsersForNameAndId";
import {findUserDetails} from "./helperFunctions/findUserDetails";
import {User} from "../types/user";
import bodyParser from "body-parser";
import {addNameToASingleMessage} from "./helperFunctions/addNameToASingleMessage";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req:express.Request, res:express.Response) =>{
    attachNameToMessage();
    res.status(200).send(mockMessages);
})

app.get('/users', (req: express.Request, res:express.Response) => {
    res.status(200).send(parseUsersForNameAndId());
})

app.get('/details', (req:express.Request, res:express.Response) => {
    const { id } = req.query;
    const result = findUserDetails(+id!)
    res.status(200).send(result);
})

app.post('/messages', (req:express.Request,res:express.Response) => {
    let messageData = req.body;
    messageData = {...messageData, likes: []};
    messageData = {...messageData, name: addNameToASingleMessage(messageData.authorId)!.name};
    mockMessages.push(messageData);

})

app.post('/likes', (req:express.Request, res:express.Response) => {
    const likeReq = req.body;
    const messageNum = likeReq.messageId;
    const likeStatus = likeReq.like;
    console.log('index is:',messageNum-1);
    likeStatus ? mockMessages[messageNum-1].likes.pop()
                : mockMessages[messageNum-1].likes.push(mockMessages[messageNum-1].likes.length + 1);
    console.log(mockMessages[messageNum-1]);
})

app.listen(3005, () => {
    console.log('server is running on port 3005');
});