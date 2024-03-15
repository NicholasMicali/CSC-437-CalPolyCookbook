// src/models/mongo/profile.ts
import { Schema, model } from "mongoose";
import { Profile } from "../profile";

const profileSchema = new Schema<Profile>(
  {
  email: { type: String, required: true, unique: true, trim: true },
  name: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  recipes: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }],
  },
  { collection: "user_profiles"}
);

const ProfileModel = model<Profile>("Profile", profileSchema);

export default ProfileModel;
