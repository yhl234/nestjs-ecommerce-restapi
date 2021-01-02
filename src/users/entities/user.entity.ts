import { Exclude } from 'class-transformer';
import * as bcrypt from 'bcrypt';

export class User {
  // username: string;
  // @Exclude()
  // password: string;
  // @Exclude()
  // salt: string;
  // async validatePassword(password: string): Promise<boolean> {
  //   const hash = await bcrypt.hash(password, this.salt);
  //   return hash === this.password;
  // }
}
