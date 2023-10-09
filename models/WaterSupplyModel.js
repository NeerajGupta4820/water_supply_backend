import moongose from "mongoose";

const WaterSupplySchema = new moongose.schema({
  suppilername: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
    },
    coordinates: {
      type: [Number],
      index: "2dsphere",
    },
  },
  typeofstructure:{
    type:String,
    require:true,
  },
  iotSensors: [{ type: Schema.Types.ObjectId, ref: "IoTSensor" }],
});
