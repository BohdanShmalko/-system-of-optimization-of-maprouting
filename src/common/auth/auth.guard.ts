import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { EHttpExceptionMessage } from '../dto/http.expression';
import { AuthService } from './auth.service';
import { MIDDLE_KEYS } from './auth.decorator';

@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private reflector: Reflector,
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const req = context.switchToHttp().getRequest();
        try {
            const keys = this.reflector.getAllAndOverride(MIDDLE_KEYS, [
                context.getHandler(),
                context.getClass(),
            ]);
            const jwtData = await this.authService.getJwtData({
                token: req.headers.authorization,
            });

            const jwtKeys = Object.keys(jwtData);
            if (keys && this.authService.diff(jwtKeys, keys).length) throw '';
            req.jwtData = jwtData;
            return true;
        } catch (e) {
            throw new UnauthorizedException({
                message: EHttpExceptionMessage.Unauthorized,
            });
        }
    }
}
