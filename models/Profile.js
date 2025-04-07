import { Schema, models, model } from "mongoose";

const profileSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: { type: String, required: true },
    location: { type: String, required: true },
    phone: { type: String, required: true },
    price: { type: String, required: true },
    realState: { type: String, required: true },
    constructiorDate: { type: Date, required: true },
    category: { type: String, required: true },
    rules: {
      type: [String],
      default: [],
    },
    amenities: {
      type: [String],
      default: [],
    },
    published: {
      type: Boolean,
      default: false,
    },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    createdAt: { type: Date, default: () => Date.now(), immutable: true },
    updateAt: { type: Date, default: () => Date.now() },
  },
  { timestamps: true }
);

const Profile = models.Profile || model("Profile", profileSchema);

export default Profile;
