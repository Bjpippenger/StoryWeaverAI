const db = require('../config/connection');

const cleanDB = async (modelName, collectionName) => {
    try {
        // Check if the collection exists
        const collection = db.collection(collectionName);
        if (collection) {
            // Drop the collection
            await collection.drop();
            console.log(`Collection '${collectionName}' dropped successfully.`);
        }
    } catch (err) {
        throw err;
    }
};

module.exports = cleanDB;
