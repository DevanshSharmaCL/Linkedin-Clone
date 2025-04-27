// this is how we make Schema
import mongoose, { Model, Schema, Document } from 'mongoose';
import { IUser } from './user.model';

// Interface
export interface IPost {
  description: string;
  user: {
    userId: string;
    profilePhoto?: string;
    firstName: string;
    lastName: string;
  };
  imageUrl?: string;
  likes?: string[];
  comments?: mongoose.Types.ObjectId[];   
}

// Document Interface (for timestamps)
export interface IPostDocument extends IPost, Document {
  createdAt: Date;
  updatedAt: Date;
}

// Schema
const postSchema = new mongoose.Schema<IPostDocument>(
  {
    description: {
      type: String,
      required: true,
    },
    user: {
      userId: {
        type: String,
        required: true,
      },
      profilePhoto: {
        type: String,
        default: "",
      },
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    likes: {
      type: [String],
      default: [],
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      }
    ],
  },
  { timestamps: true }
);

// Model
export const Post: Model<IPostDocument> = 
  mongoose.models?.Post || mongoose.model<IPostDocument>("Post", postSchema);
