const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Business = new Schema(
  {
    person_name: {
      type: String
    },
    business_name: {
      type: String
    },
    person_nic: {
      type: String
    }
  },
  {
    collection: "business"
  }
);

module.exports = mongoose.model("business", Business);
