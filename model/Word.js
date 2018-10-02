const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WordSchema = new Schema({
  key: {type: String},
  action: {type: String},
  hits: {type: Number, default: 0}
});

const Word = mongoose.model("Word", WordSchema);

module.exports = Word;
