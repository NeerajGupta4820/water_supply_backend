// server/models/IoTSensorModel.js
import mongoose from 'mongoose';

const ioTSensorSchema = new mongoose.Schema({
  name: String,
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point',
    },
    coordinates: [Number],
  },
  sensortype:{
    type: String,
    require:true,
  },
  alertThresholds: {
    // Define your threshold properties here
  },
});

ioTSensorSchema.index({ location: '2dsphere' });

const IoTSensorModel = mongoose.model('IoTSensor', ioTSensorSchema);

export default IoTSensorModel;
