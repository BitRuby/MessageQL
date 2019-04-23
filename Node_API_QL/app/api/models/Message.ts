import { Schema, Document, model } from "mongoose";

export interface IMessage extends Document {
  convId: String;
  userId: [];
  date: Date;
  content: String;
}

export const MessageSchema = new Schema({
  convId: {
    type: Schema.Types.ObjectId,
    ref: "Conversation"
  },
  userId: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  date: { type: Date, required: true },
  content: { type: String, required: true }
});

const Mess = model<IMessage>("Message", MessageSchema);
export default Mess;
