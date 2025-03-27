import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { LoginDTO } from 'src/application/dto/AuthDto';
import { AuthService } from 'src/application/service/AuthService';

@Controller('auth')
export class AuthController {
  constructor(private readonly authUseCase: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDTO): Promise<{ token: string }> {
    const token = await this.authUseCase.authenticate(loginDto);
    if (!token) throw new UnauthorizedException('Credenciales incorrectas');

    return { token };
  }
}
