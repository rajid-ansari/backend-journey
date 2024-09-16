import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema(
    {
        videoFile: { 
            type: String,   //cloudinary url
            required: true,
        },

        thumbnail: { 
            type: String,   //cloudinary url
        },

        title: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            required: true,
            trim: true,
        },

        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },

        duration: {
            type: Number,  // cloudinary
        },

        views: {
            type: Number,
            default: 0,
        },

        isPublished: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true }
);

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);
