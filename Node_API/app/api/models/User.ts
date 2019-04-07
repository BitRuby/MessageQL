import { Schema, Document, model } from "mongoose";

export interface IUser extends Document {
    _id: Schema.Types.ObjectId;
    username: String;
    password: String;
}

export const UserSchema = new Schema({
    _id: {type: Schema.Types.ObjectId, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true}
})

const User = model<IUser>('User', UserSchema);
export default User;
