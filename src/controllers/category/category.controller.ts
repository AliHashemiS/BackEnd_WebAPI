import { Controller, Get } from '@nestjs/common';
import { CategoryService } from '../../services/category/category.service';

@Controller('category')
export class CategoryController {

    constructor(private categoryService:CategoryService){ }

    @Get()
    public async getCategories(){
      return await this.categoryService.findAll();
    }
}
