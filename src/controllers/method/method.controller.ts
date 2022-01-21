import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { MethodService } from '../../services/method/method.service';

@Controller('method')
export class MethodController {

    constructor(private methodService:MethodService){ }

    @Post()
    public async createMethod(@Body() body){
        return await this.methodService.createMethod(body);
    }

    @Get()
    public async getMethods(){
        return await this.methodService.findAll();
    }

    @Get('findWithFilter')
    public async getMethodUserName(@Query() query){
        return await this.methodService.findWithFilter(query);
    }

    @Get(':id')
    public async getMethod(@Param() params){
        return await this.methodService.findOne(params.id);
    }

}
