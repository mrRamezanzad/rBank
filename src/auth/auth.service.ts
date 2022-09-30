import { Injectable } from "@nestjs/common";
import { User } from "src/users/user.entity";
import { UsersService } from "src/users/users.service";
import { RegisterDTO } from "./dto/register.dto";

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}
  
  register(registerDto: RegisterDTO): Promise<User> {
    return this.userService.create(registerDto)
  }
}
