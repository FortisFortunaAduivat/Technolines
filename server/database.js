// Connection to the database
import mongoose from "mongoose";
// create the function to the database and the logic inside
const connectToDatabase = async () => {
    try {
        mongoose.set("strictQuery", false);
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
};

export default connectToDatabase;