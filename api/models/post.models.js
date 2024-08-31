import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
},
  severity: { 
    type: String, 
    required: true 
},
  status: { 
    type: String, 
    required: true 
},
  author: { 
    type: String, 
    required: true 
},
  affectedSectors: [String],
  countries: [String],
  tags: [String],
  description: { 
    type: String, 
    required: true 
},

  technicalDetails: {
    malwareType: String,
    deliveryMethod: String,
    encryptionMethod: String
  },
  iocs: [{
    type: { 
        type: String, 
        required: true 
    },
    value: { 
        type: String, 
        required: true 
    }
  }],
  impactAssessment: String,
  mitigationSteps: [String],
  relatedIncidents: [{
    id: String,
    title: String
  }],
  references: [{
    title: String,
    url: String
  }]
},{
  timestamps: true
});

export default mongoose.model('Post', postSchema);
