import pkg from "mongoose";
const { Schema: _Schema, model } = pkg;
const Schema = _Schema;

let User = new Schema({
  userObj: {
    type: "object",
    properties: {
      id: {
        type: "guid",
        required: true,
      },
      userName: {
        type: "string",
        required: true,
      },
      givenName: {
        type: "string",
        required: false,
      },
      surName: {
        type: "string",
        required: false,
      },
      DOB: {
        type: "string",
        required: false,
      },
    },
  },
});
export default model("User", User);
