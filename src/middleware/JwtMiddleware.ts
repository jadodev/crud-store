import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException('Token no proporcionado');
    }

    const token = authHeader.replace('Bearer ', '').trim();
    try {
      const decoded = this.jwtService.verify(token);
      
      if (!decoded.tenantid) {
        throw new UnauthorizedException('El token no contiene tenant_id');
      }

      req.user = { ...decoded, tenant_id: decoded.tenantid };
      next();
    } catch (error) {
      throw new UnauthorizedException('Token inválido o expirado');
    }
  }
}
