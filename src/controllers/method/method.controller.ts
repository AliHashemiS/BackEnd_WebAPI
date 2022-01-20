import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MethodService } from '../../services/method/method.service';

@Controller('method')
export class MethodController {

  constructor(private methodService:MethodService){ }

  @Post()
  public async createMethod(@Body() body){
    return await this.methodService.createMethod(body);
  }

  @Get()
  public getMethods(){
    return "hola"
  }


}
