const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
// sua bai mot chut
const chiPhiSchema = new Schema({
  maChiPhi: {
    type: String,
  },
  tenLoaiChiPhi: {
    type: String,
  },
  giaTien: {
    type: Number,
  },
});

module.exports = mongoose.model("chiPhi", chiPhiSchema);
