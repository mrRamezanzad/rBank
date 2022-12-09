import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { RegisterDTO } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  async register(registerDto: RegisterDTO): Promise<User> {
    return await this.userService.create(registerDto);
  }

  async login(otpCode) {
    return 'logged in successfully';
  }

  async isLoggedIn() {
    return true;
  }
}
