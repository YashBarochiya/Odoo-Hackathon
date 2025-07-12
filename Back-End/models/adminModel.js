import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    image: { type: Array },
});

const adminModel = mongoose.models.admin || mongoose.model('admin', adminSchema);

export default adminModel;
