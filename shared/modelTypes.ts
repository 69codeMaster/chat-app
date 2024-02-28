export type IChat = {
  _id: string;
  participents: string[];
  messages: string[];
};

export type IMessage = {
  _id: string;
  senderId: string;
  receiverId: string;
  message: string[];
  createdAt: string;
};

export type IUser = {
  _id: string;
  fullName: string;
  username: string;
  password: string;
  gender: "male" | "female" | "";
  profilePic: string;
  passwordConfirmation: string;
};
