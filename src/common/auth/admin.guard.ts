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

/**
* AdminAuth Guard
* @name AdminAuthGuard
* @kind class
*/
@Injectable()
export class AdminAuthGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private reflector: Reflector,
    ) {}

    /**
     * Guard. Checks the jwt token, decrypts it and transmits data to the controller
     * @name canActivate
     * @property {Object}  context  - ExecutionContext from @nestjs/common
     * @returns {boolean} valid status
     */
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const req = context.switchToHttp().getRequest();
        try {
            const keys = this.reflector.getAllAndOverride(MIDDLE_KEYS, [
                context.getHandler(),
                context.getClass(),
            ]);
            const apiKeyData = await this.authService.getApiKeyData(req.headers.api_key);
            if(keys) {
                const documentKeys = Object.keys(apiKeyData.document);
                if (keys && this.authService.diff(documentKeys, keys)) throw '';
            }
            if(!apiKeyData.isAdmin) throw '';
            req.client = apiKeyData;
            return true;
        } catch (e) {
            throw new UnauthorizedException({
                message: EHttpExceptionMessage.Unauthorized,
            });
        }
    }
}
