import mongoose from "mongoose";

const alertSchema=new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    required:true,
  },
  status: {
    type: String,
    enum: ['open', 'in progress', 'resolved'],
    default: 'open',
  },
});


export default mongoose.model("Alerts",alertSchema)