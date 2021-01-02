import { Schema, HookNextFunction } from 'mongoose';
import * as bcrypt from 'bcrypt';

export const UserSchema = new Schema({
  username: {
    type: String,
    minlength: 6,
    required: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
});

UserSchema.pre('save', async function(next: HookNextFunction) {
  try {
    if (!this.isModified('password')) {
      return next();
    }
    // tslint:disable-next-line:no-string-literal
    const hashed = await bcrypt.hash(this['password'], 10);
    // tslint:disable-next-line:no-string-literal
    this['password'] = hashed;
    return next();
  } catch (err) {
    return next(err);
  }
});
