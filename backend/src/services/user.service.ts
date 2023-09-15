import User from "../models/user.model";

const users = [
  {
    name: "Mongo user 1",
    email: "user1@email.com",
  },
  {
    name: "Mongo user 2",
    email: "user2@email.com",
  },
];

export async function getUsers() {
  const createUsersResp = await User.find();
  console.log(createUsersResp);
  return createUsersResp
}
