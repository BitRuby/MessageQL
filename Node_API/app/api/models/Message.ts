import { Schema, Document, model } from "mongoose";

export interface IMessage extends Document {
    _id: Schema.Types.ObjectId;
    convId: Number;
    userId: Number;
    date: Date;
    content: String;
}

export const MessageSchema = new Schema({
    _id: {type: Schema.Types.ObjectId, required: true},
    convId: {type: Number, required: true},
    userId: {type: Number, required: true},
    date: {type: Date, required: true},
    content: {type: String, required: true}
})

const Mess = model<IMessage>('Message', MessageSchema);
export default Mess;
