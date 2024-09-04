import { Schema, model, connect } from "mongoose";
import { car, logVehicleData } from "./vehiclemodel";

interface IUser {
  name: string;
  email: string;
  avatar?: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String,
});

const User = model<IUser>("User", userSchema);

export async function run() {
  try {
    await connect("mongodb://127.0.0.1:27017/test");

    // const user = new User({
    //   name: "Bill",
    //   email: "bill@initech.com",
    //   avatar: "https://i.imgur.com/dM7Thhn.png",
    // });

    // await user.save();
    // console.log(user.email);
    logVehicleData(car);
  } catch (err: any) {
    console.log(err.message);
  }
}
