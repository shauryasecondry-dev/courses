import mongoose from 'mongoose';

let PurchaseSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId, // ✅ FIX: 'type' not 'Types'
    ref: 'Course',
    required: true // ✅ Recommended: make it required
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, // ✅ FIX: 'type' not 'Types'
    ref: 'User',
    required: true // ✅ Recommended: make it required
  }
}, {
  timestamps: true // ✅ Optional: adds createdAt and updatedAt
});

let Purchase = mongoose.model("Purchase", PurchaseSchema);
export default Purchase;