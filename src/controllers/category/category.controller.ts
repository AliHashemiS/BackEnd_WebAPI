import { Controller, Get } from '@nestjs/common';
import { CategoryService } from '../../services/category/category.service';

@Controller('category')
export class CategoryController {

    constructor(private userService:CategoryService){ }

    @Get()
    public async test(){
        const user = await this.userService.test();
        return user
    }
}
