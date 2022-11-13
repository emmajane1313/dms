import { Schema, models, model } from "mongoose";

const AddressSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  countryLocation: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  buildingAparmentNo: {
    type: String,
    required: true,
  },
  stateProvince: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
});

const Address = models.Address || model("Product", AddressSchema);

export default Address;
