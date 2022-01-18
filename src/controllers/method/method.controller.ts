import { Controller, Get } from '@nestjs/common';
import { MethodService } from '../../services/method/method.service';

@Controller('method')
export class MethodController {

    constructor(private userService:MethodService){ }

    @Get()
    public async test(){
        const user = await this.userService.test();
        return user
    }
}
