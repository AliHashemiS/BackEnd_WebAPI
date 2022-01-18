import { Controller, Get } from '@nestjs/common';
import { UserService } from '../../services/user/user.service';

@Controller('user')
export class UserController {

  constructor(private userService:UserService){ }

  @Get()
  public async test(){
    const user = await this.userService.test();
    return user
  }

}