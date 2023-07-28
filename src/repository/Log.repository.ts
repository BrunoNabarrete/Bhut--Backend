import mongoose from "mongoose";
import ILogEntity from "../entity/Log.entity";

const schema = new mongoose.Schema({ car_id: String }, {
    timestamps: {
      createdAt: 'data_hora',
    },
    versionKey: false
});

const LogRepository = mongoose.model<ILogEntity>('log', schema)

export default LogRepository;