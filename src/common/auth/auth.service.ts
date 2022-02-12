import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';

/**
* Error service class
* @name ErrorService
* @kind class
*/
@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {
    }

    /**
     * Get data from jwt token
     * @name getJwtData
     * @kind function
     * @property {Object}  authData  - object with token
     * @property {string}  authData.token  - jwt token
     * @returns {boolean} is valid jwt token
     */
    public async getJwtData(
        authData,
    ): Promise<{ _id: string }> {
        const { token } = authData;
        if (!token) throw '';
        return this.jwtService.verify(token);
    }

    /**
     * Generate jwt token
     * @name generateToken
     * @kind function
     * @property {Object}  payload  - data that want to encrypt
     * @returns {string} jwt token
     */
    public generateToken(payload): string {
        return this.jwtService.sign(payload);
    }

    /**
     * Compares the values of two arrays
     * @name diff
     * @kind function
     * @property {string[]}  a1  - array #1
     * @property {string[]}  a2  - array #2
     * @returns {boolean} is same arrays
     */
    public diff(a1, a2) {
        return a1
            .filter((i) => !a2.includes(i))
            .concat(a2.filter((i) => !a1.includes(i)));
    }
}
