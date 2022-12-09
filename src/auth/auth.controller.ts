import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { GenerateOTPDTO } from './dto/generateOTP.dto';
import { RegisterDTO } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /* ------------------------------ Registration ----------------------------- */
  @Post('register')
  async register(@Body() registerDTO: RegisterDTO) {
    // TODO: 1- RETURNING ERROR WITH OBSERVABLES
    return this.authService.register(registerDTO);
  }

  /* ---------------------------------- Login --------------------------------- */
  @Post('login')
  async login(@Body() { otpCode }): Promise<any> {
    return await this.authService.login(otpCode);
  }

  /* ------------------------------- isLoggedIn ------------------------------- */
  @Get()
  async isLoggedIn(): Promise<boolean> {
    return this.authService.isLoggedIn();
  }
}
