import mongoose from "mongoose";

const ShortURLSchema = new mongoose.Schema({
    longUrl: { 
        type: String, 
        required: true 
    },
    shortCode: { 
        type: String, 
        unique: true, 
        required: true 
    },
    visitCount: { 
        type: Number, 
        default: 0 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    expiresAt: { 
        type: Date, 
        default: null
    }
});

ShortURLSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export default mongoose.model("ShortURL", ShortURLSchema);
