import { isMobilePhone, maxLength, minLength } from 'class-validator';

export class CreateUserDto {
  mobile: string;

  name: string;

  username: string;

  password: string;
}
