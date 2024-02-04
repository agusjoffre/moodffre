import mongoose from 'mongoose'

const moodSchema = new mongoose.Schema({
  mood: {
    type: String,
    required: true
  },
  activity: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  date: {
    type: new Date()
  }
})

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
export default mongoose.models.Mood || mongoose.model('Mood', moodSchema)
