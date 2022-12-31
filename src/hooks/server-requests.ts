import { Message } from '../types/message';
import { mockUsers } from '../assets/mockUsers';
import {User} from "../types/user";
import {json} from "express"; // todo: remove this line after server implementation

const endpoint = '../assets/'; // todo: add endpoint (server) address (starting with http://)


/**
 * GET Request to get the list of messages
 **/
export async function getMessages() {
  // todo: replace this with fetch to get the messages from the server
  // const { mockMessages } = await import(`${endpoint}/mockMessages`);
  const response = await fetch('http://localhost:3005/');
  const result = await response.json();

  // todo: this should be implemented in the server. Chat Messages should already have the authors' names.
  // todo: remove this mapping when getting the data from the server
  // const mockMessagesWithNames = mockMessages.map((message: Message) => {
  //   const author = mockUsers.find(user => user.id === message.authorId);
  //   const authorName = author && author.name;
  //   return { ...message, authorName };
  // });

  return result ;
}

/**
 * GET request to get the full list of users - id + name
 **/
export async function getUsers() {
  // todo: replace this with fetch to get the user list from the server
  // const { mockUsers } = await import(`${endpoint}/mockUsers`);
  // return mockUsers;
  const response = await fetch('http://localhost:3005/users');
  const result = response.json();

  return result;
}


/**
 * GET request to get the full details of a user
 **/
export async function getUserDetails(userId: number) {
  // todo: replace this with fetch to get the user details from the server.
  //  For mocking example, we're calling an external JSON service.
  //  You can use mockUserDetails.ts for the list of user details in the server.
  // const res = await fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`);
  // return (await res.json())[0];
  const response = await fetch(`http://localhost:3005/details?id=${userId}`);
  const result: User = await response.json();

  return result;
}

/**
 * POST request to add a message. The message contains: id, body, timestamp, authorId
 **/
export async function addNewMessage(message: Message) {
  // todo: implement sending a new message to the server
  const response = fetch('http://localhost:3005/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(message)
  })
}

/**
 * POST request to change the user's like of a message
 **/
export async function changeMessageLikes(messageId: number, userId: number, like: boolean) {
  // todo: implement sending a rquest to change the like of a message by the user
  const likeRequest = {messageId, userId, like};
  const response = fetch('http://localhost:3005/likes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(likeRequest)
  })
}