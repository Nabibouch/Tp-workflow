import mongoose from "mongoose";

const connectionDB = async () => {
    try {
        await mongoose.connect("mongodb://admin:admin@localhost:27017/");
        console.log(`MongoDB est connecté`);
    } catch (error) {
        console.error(`Problème lors de la connection`, error);
        process.exit(1);
    }
}

export default connectionDB;