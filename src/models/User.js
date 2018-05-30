import mongoose, {Schema} from 'mongoose';

const UserSchema = new Schema({
  code: {type: String, required: true, unique: true},
  full_name: {type: String, required: true},
  username: {type: String, required: true, unique: true},
});
export default mongoose.model('User', UserSchema);
