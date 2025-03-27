import { Inject, Injectable } from '@nestjs/common';
import { AuthenticateBranchPort } from '../port/in/AuthenticateBranchPort';
import { LoginDTO } from '../dto/AuthDto';
import { JwtService } from '@nestjs/jwt';
import { LoginRepositoryPort } from '../port/out/LoginRepositoryPort';

@Injectable()
export class AuthService implements AuthenticateBranchPort {
  constructor(
    @Inject("authRepositoryPort") private readonly repository: LoginRepositoryPort,
    private readonly jwtService: JwtService
  ) {}


    async authenticate(loginDto: LoginDTO): Promise<string | null> {
        const branch = await this.repository.findBranch(
            loginDto.name,
            loginDto.address,
            loginDto.city
          );
      
          if (!branch || branch.password !== loginDto.password) {
            return null;
          }
      
          const payload = { tenantid: branch.tenantid };
          return this.jwtService.sign(payload);
        }
}
