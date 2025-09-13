import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'your_mongodb_connection_string';
const client = new MongoClient(uri);
const dbName = 'honorWallDB';
const collectionName = 'honors';

async function connectDB() {
    try {
        await client.connect();
        console.log('Connected to database');
    } catch (error) {
        console.error('Database connection error:', error);
    }
}

async function getAllHonors() {
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    return await collection.find({}).toArray();
}

async function addHonor(honorData) {
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.insertOne(honorData);
    return result.insertedId;
}

async function updateHonor(id, honorData) {
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    await collection.updateOne({ _id: id }, { $set: honorData });
}

async function deleteHonor(id) {
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    await collection.deleteOne({ _id: id });
}

export { connectDB, getAllHonors, addHonor, updateHonor, deleteHonor };