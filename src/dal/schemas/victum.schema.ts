import mongoose, { model } from 'mongoose';

const Schema = mongoose.Schema;

const victums = new Schema(
  {
    email: {
      type: String
    },
    status: {
        type: String,
        enum : ['sent','opened'],
        default: 'sent'
    },
  },
  { collection: "Victums" }
);

const Victum = model('Victums', victums);
export { Victum };