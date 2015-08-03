Bills = new Mongo.Collection('bills', { idGeneration:'MONGO' });
Bills.attachSchema(Schemas.Bills);