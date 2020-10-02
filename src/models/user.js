const {model,Schema} = require("mongoose")

const schema_users = new Schema(
  {
    name:{
      type:String,
    },
    email:{
      type:String
    }
  },
  {
    timestamps: true,
  }
)

module.exports = model("Users", schema_users);