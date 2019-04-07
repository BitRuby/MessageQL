import { Schema, Document, model } from "mongoose";

export interface IConversation extends Document {
    _id: Schema.Types.ObjectId;
    userIdArray: Array<Number>;
}

export const ConversationSchema = new Schema({
    _id: {type: Schema.Types.ObjectId, required: true},
    userIdArray: {type: Array<Number>(), required: true},
})

const Conv = model<IConversation>('Conversation', ConversationSchema);
export default Conv;
