import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {
    }

    public async getJwtData(
        authData,
    ): Promise<{ _id: string }> {
        const { token } = authData;
        if (!token) throw '';
        return this.jwtService.verify(token);
    }

    public generateToken(payload): string {
        return this.jwtService.sign(payload);
    }

    public diff(a1, a2) {
        return a1
            .filter((i) => !a2.includes(i))
            .concat(a2.filter((i) => !a1.includes(i)));
    }
}
