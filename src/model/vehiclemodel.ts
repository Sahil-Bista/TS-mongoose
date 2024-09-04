import { Schema,Model,model, HydratedDocument } from 'mongoose';
//Defining an interface with vehicle properties
//Interfaces are defined to define the structure throughout the document to ensre type safety
interface IVehicle{
    name :string;
    vehicle_model  :string;
    manufacturer : string;
    design : string;
    year_sold : number
}

//Creating a schema for vehicle model
type VehicleModel = Model<IVehicle>;
//this specifies that the model will work with documents that conform to the IVehicle interface
const  VehicleSchema:Schema = new Schema<IVehicle>({
    name: { type: String },
    vehicle_model: { type: String },
    manufacturer: { type: String },
    design: { type: String },
    year_sold: {type: Number }
});


//creating the vehicle model:
const Vehicle:VehicleModel = model<IVehicle>("Vehicle",VehicleSchema);

//create a document of the Vehicle model
export const car: HydratedDocument<IVehicle> = new Vehicle({
    name: 'Toyota',
    vehicle_model: 'Corrolla',
    manufacturer: 'Toyota Motors',
    design: 'Sedan',
    year_sold: 2007
})


//test the types and properties of the document.
export const logVehicleData = (vehicle : HydratedDocument<IVehicle>) : void =>{
    console.log("Make: ", vehicle.name)
    console.log("Model: ", vehicle.vehicle_model)
    console.log("Manufacturer: ", vehicle.manufacturer)
    console.log("Design: ", vehicle.design)
    console.log("Year sold: ", car.year_sold)
}