import { Schema, Document, model } from "mongoose";

export interface IUser extends Document {
  username: String;
  password: String;
}

export const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
});

const User = model<IUser>("User", UserSchema);
export default User;
