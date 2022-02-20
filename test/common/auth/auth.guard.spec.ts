import { Test, TestingModule } from '@nestjs/testing';
import { MongoModuleMock } from '@mock/mongo/mongo.module.mock';
import { MongoService } from '@mock/mongo/mongo.service.mock';
import { JwtAuthGuard } from '@common/auth/auth.guard';
import { AuthService } from '@common/auth/auth.service';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { JwtModuleOptions } from '@nestjs/jwt/dist/interfaces/jwt-module-options.interface';

describe('JwtAuthGuard', () => {
    let jwtAuthGuard: JwtAuthGuard;
    const jwtOptions: JwtModuleOptions = {
      secret: 'testSecret',
    };
  
    beforeAll(async () => {
      jwtAuthGuard = new JwtAuthGuard(
        new AuthService(
          new JwtService(jwtOptions)
        ),
        new Reflector(),
      )
    });
  
    describe('JwtAuthGuard check method', () => {
      it('canActivate', async () => {})
    })
})