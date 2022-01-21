import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from '../../services/user/user.service';

@Controller('user')
export class UserController {

  constructor(private userService:UserService){ }

  @Post()
  public async createUser(@Body() data){
    console.log(data);
    return await this.userService.createUser(data);
  }

  @Post('login')
  public async getUser(@Body() data){
    console.log(data);
    return await this.userService.findUser(data);
  }

}