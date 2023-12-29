import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema(
    {
        videoFile: {
            type : String, // cloudnairy url
            required: true
        },
        thumbnail: {
            type : String, // cloudnairy url
            required: true
        },
        title: {
            type : String, 
            required: true
        },
        desscription: {
            type : String, 
            required: true
        },
        duration: {
            type : Number, // cloudnairy url
            required: true
        },
        views: {
            type : Number, 
            default: 0
        },
        isPublished: {
            type : Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
) 

export const Video = mongoose.model("Video", videoSchema);