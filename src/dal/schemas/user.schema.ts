import mongoose, { model } from 'mongoose';

const Schema = mongoose.Schema;

const users = new Schema(
  {
    email: {
      type: String
    },
    password: {
      type: String
    },
    role: {
        type: String,
        enum : ['admin','user'],
        default: 'user'
    },
  },
  { collection: "Users" }
);

const User = model('users', users);
export { User };