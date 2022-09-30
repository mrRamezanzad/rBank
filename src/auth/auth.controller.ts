import { Body, Controller, Post, Get } from "@nestjs/common";
import { stringify } from "querystring";
import { AuthService } from "./auth.service";
import { RegisterDTO } from "./dto/register.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post("register")
  register(@Body() registerDto: RegisterDTO) {
    return this.authService.register(registerDto);
  }

  @Get()
  isLoggedIn() {
    return true;
  }
}
