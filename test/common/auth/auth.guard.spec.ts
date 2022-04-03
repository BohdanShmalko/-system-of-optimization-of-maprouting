import { Test, TestingModule } from '@nestjs/testing';
import { MongoModuleMock } from '@mock/mongo/mongo.module.mock';
import { MongoService } from '@mock/mongo/mongo.service.mock';
import { AuthService } from '@common';
import { Reflector } from '@nestjs/core';

describe('JwtAuthGuard', () => {
  
    beforeAll(async () => {});
  
    describe('JwtAuthGuard check method', () => {
      it('canActivate', async () => {})
    })
})