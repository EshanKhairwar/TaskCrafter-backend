import mongoose from 'mongoose';
const { Schema } = mongoose;

const ReviewSchema = new Schema({
  gigId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Gig',
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  star: {
    type: Number,
    required: true,
    enum:[1,2,3,4,5]
  },
  desc: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model("Review", ReviewSchema)