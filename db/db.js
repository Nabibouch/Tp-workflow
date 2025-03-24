import mongoose from "mongoose"

const connectionDB = async () => {
    try {
        await mongoose.connect(process.env.DB);
        console.log(`MongoDB est connecté`);
    } catch (error) {
        console.error(`Problème lors de la connection`, error);
        process.exit(1);
    }
}

export default connectionDB;