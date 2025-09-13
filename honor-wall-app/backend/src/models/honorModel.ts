import { Schema, model } from 'mongoose';

const honorSchema = new Schema({
  studentName: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    enum: ['高一', '高二', '高三'],
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
  weeklyStar: {
    type: Boolean,
    default: false,
  },
  studyStar: {
    type: Boolean,
    default: false,
  },
  bestGroup: {
    type: String,
    default: '',
  },
  bestClass: {
    type: String,
    default: '',
  },
  bestDorm: {
    type: String,
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Honor = model('Honor', honorSchema);

export default Honor;