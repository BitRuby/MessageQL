import { Schema, Document, model } from "mongoose";
import { IUser } from "./User";

export interface IConversation extends Document {
  userIdArray: Array<String>;
  creator: String;
}

export const ConversationSchema = new Schema({
  userIdArray: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

const Conv = model<IConversation>("Conversation", ConversationSchema);
export default Conv;
