const { MongoClient, ObjectId } = require('mongodb');
const url = process.env.MONGO_URL;


const getAllHosptels = async (req, res) => {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
      await client.connect();
      const database = client.db("hospitals");
  
      const hospitalsCollection = database.collection('hospital');
  
      const hospitals = await hospitalsCollection.find({}).toArray();
  
      res.json(hospitals);
  
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } finally {
      await client.close();
  }
}

const getHospitalById = async (req, res) => {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
      await client.connect();
      const database = client.db("hospitals");
  
      const hospitalsCollection = database.collection('hospital');
  
      const id = req.params.id;
  
      const hospital = await hospitalsCollection.findOne({_id : new ObjectId(id)});
      if(hospital){
        res.json(hospital)
      } else {
        res.status(404).send('Hospital not found');
      }
  
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } finally {
      await client.close();
  }
}

const getLabs =  async (req, res) => {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
      await client.connect();
      const database = client.db("Labs");
  
      const LabsCollection = database.collection('lab');
  
      const Labs = await LabsCollection.find({}).toArray();
  
      res.json(Labs);
  
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } finally {
      await client.close();
  }
}

const getLabById =  async (req, res) => {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
      await client.connect();
      const database = client.db("Labs");
  
      const LabsCollection = database.collection('lab');
  
      const id = req.params.id;
  
      const lab = await LabsCollection.findOne({_id : new ObjectId(id)});
      if(lab){
        res.json(lab)
      } else {
        res.status(404).send('Lab not found');
      }
  
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } finally {
      await client.close();
  }
}

const getClinics =   async (req, res) => {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
      await client.connect();
      const database = client.db("Clinics_and_medicalCenters");
  
      const ClinicsCollection = database.collection('Clinics_AND_Centers');
  
      const Clinics = await ClinicsCollection.find({}).toArray();
  
      res.json(Clinics);
  
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } finally {
      await client.close();
  }
}

const getClinicById =  async (req, res) => {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
      await client.connect();
      const database = client.db("Clinics_and_medicalCenters");
  
      const ClinicsCollection = database.collection('Clinics_AND_Centers');
  
      const id = req.params.id;
  
      const clinic = await ClinicsCollection.findOne({_id : new ObjectId(id)});
      if(clinic){
        res.json(clinic)
      } else {
        res.status(404).send('Clinic not found');
      }
  
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } finally {
      await client.close();
  }
}

const getCompanies =  async (req, res) => {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
      await client.connect();
      const database = client.db("pharmaceutical_companies");
  
      const companiesCollection = database.collection('companies');
  
      const companies = await companiesCollection.find({}).toArray();
  
      res.json(companies);
  
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } finally {
      await client.close();
  }
}

const getCompanyById =  async (req, res) => {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
      await client.connect();
      const database = client.db("pharmaceutical_companies");
  
      const companiesCollection = database.collection('companies');
  
      const id = req.params.id;
  
      const company = await companiesCollection.findOne({_id : new ObjectId(id)});
      if(company){
        res.json(company)
      } else {
        res.status(404).send('Company not found');
      }
  
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } finally {
      await client.close();
  }
}

const getRadiologyCenters =  async (req, res) => {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
      await client.connect();
      const database = client.db("Radiologycenters");
  
      const RadiologycentersCollection = database.collection('radiologycenter');
  
      const Radiologycenters = await RadiologycentersCollection.find({}).toArray();
  
      res.json(Radiologycenters);
  
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } finally {
      await client.close();
  }
}

const getRadiologyCenterById =  async (req, res) => {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
      await client.connect();
      const database = client.db("Radiologycenters");
  
      const RadiologycentersCollection = database.collection('radiologycenter');
  
      const id = req.params.id;
  
      const radiologycenter = await RadiologycentersCollection.findOne({_id : new ObjectId(id)});
      if(radiologycenter){
        res.json(radiologycenter)
      } else {
        res.status(404).send('Radiologycenter not found');
      }
  
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } finally {
      await client.close();
  }
}

const getPharmacies = async (req, res) => {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
      await client.connect();
      const database = client.db("Pharmacies");
  
      const PharmaciesCollection = database.collection('pharmacy');
  
      const Pharmacies = await PharmaciesCollection.find({}).toArray();
  
      res.json(Pharmacies);
  
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } finally {
      await client.close();
  }
}

const getPharmacyById =   async (req, res) => {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
      await client.connect();
      const database = client.db("Pharmacies");
  
      const PharmaciesCollection = database.collection('pharmacy');
  
      const id = req.params.id;
  
      const pharmacy = await PharmaciesCollection.findOne({_id : new ObjectId(id)});
      if(pharmacy){
        res.json(pharmacy)
      } else {
        res.status(404).send('Pharmacy not found');
      }
  
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } finally {
      await client.close();
  }
}

const getClinicsAndMedicalCenters =  async (req, res) => {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
      await client.connect();
      const database = client.db("Clinics_and_medicalCenters");
  
      const PharmaciesCollection = database.collection('Clinics_AND_Centers');
  
      const Pharmacies = await PharmaciesCollection.find({}).toArray();
  
      res.json(Pharmacies);
  
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } finally {
      await client.close();
  }
}

const getClinicsAndMedicalCentersById =   async (req, res) => {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
      await client.connect();
      const database = client.db("Clinics_and_medicalCenters");
  
      const PharmaciesCollection = database.collection('Clinics_AND_Centers');
  
      const id = req.params.id;
  
      const pharmacy = await PharmaciesCollection.findOne({_id : new ObjectId(id)});
      if(pharmacy){
        res.json(pharmacy)
      } else {
        res.status(404).send('Clinic or medicalCenter not found');
      }
  
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } finally {
      await client.close();
  }
}

module.exports = {
    getAllHosptels,
    getHospitalById,
    getLabs,
    getLabById,
    getClinics,
    getClinicById,
    getCompanies,
    getCompanyById,
    getRadiologyCenters,
    getRadiologyCenterById,
    getPharmacies,
    getPharmacyById,
    getClinicsAndMedicalCenters,
    getClinicsAndMedicalCentersById
}