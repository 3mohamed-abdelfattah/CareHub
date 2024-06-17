const { MongoClient, ObjectId } = require('mongodb');
const dbName = 'doctors'
const url = process.env.MONGO_URL

const getAllDoctors = async (req, res) => {
  const client = new MongoClient(url,
    { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const database = client.db(dbName);
    const collection = req.params.collection;
    const collectionName = database.collection(collection);
    const result = await collectionName.find({}).toArray()
    res.json(result)
  } finally {
    await client.close();
  }
}

const getDoctorByIdAndSpeciality = async (req, res) => {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const database = client.db(dbName);
    const collection = req.params.collection;
    const id = req.params.id;
    const collectionName = database.collection(collection);
    const result = await collectionName.findOne({ _id: new ObjectId(id) })
    if (result) {
      res.json(result)
    } else {
      res.status(404).send('Doctor not found');
    }
  } finally {
    await client.close();
  }
}

const UpdateDoctor = async (req, res) => {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    // Define allowed update fields (adjust as needed)
    const allowedUpdateFields = ['name', 'address', 'phoneNumber'];
    // Extract only the provided update fields from the request body
    const updateData = {};
    for (const field of allowedUpdateFields) {
      if (req.body.hasOwnProperty(field)) {
        updateData[field] = req.body[field];
      }
    }
    await client.connect();
    const database = client.db(dbName);
    const collection = req.params.collection;
    const collectionName = database.collection(collection);
    const { D_id } = req.body;
    if (!D_id) {
      return res.status(400).send('Doctor ID is required');
    }
    const findDoctor = await collectionName.findOne({ _id: new ObjectId(D_id) });
    if (!findDoctor) {
      return res.status(404).send('Doctor not found');
    }
    const filter = { _id: new ObjectId(D_id) };
    const update = { $set: updateData }; // Update only the provided fields
    const updatedDoctor = await collectionName.findOneAndUpdate(
      filter,
      update,
      { returnOriginal: false }
    );
    // Access properties of updatedDoctor after it's fully updated
    res.status(200).json(updatedDoctor);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  } finally {
    await client.close();
  }
}

module.exports = {
  getAllDoctors,
  getDoctorByIdAndSpeciality,
  UpdateDoctor
}