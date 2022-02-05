import { Controller, Post, UseGuards, HttpCode } from '@nestjs/common';
import { ErrorService } from './error.service';
import { JwtAuthGuard, Keys } from '@common/index';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Device errors API')
@Controller('error')
export class ErrorController {
  constructor(private readonly service: ErrorService) {}

  @ApiOperation({ summary: 'Fix device error in database' })
  @ApiResponse({ status: 200, type: () => String })
  @HttpCode(200)
  @Keys()
  @UseGuards(JwtAuthGuard)
  @Post()
  fixError(): string {
    return this.service.fixError();
  }
}
