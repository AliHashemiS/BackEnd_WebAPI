import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { SequelizeConfigService } from './services/sequelize-config/sequelize-config.service';
import { UserService } from './services/user/user.service';
import { UserController } from './controllers/user/user.controller';
import { CategoryController } from './controllers/category/category.controller';
import { MethodController } from './controllers/method/method.controller';
import { CategoryService } from './services/category/category.service';
import { MethodService } from './services/method/method.service';
@Module({
  imports: [
    ConfigModule.forRoot({ 
      isGlobal: true 
    }),
    SequelizeModule.forRootAsync({
      useClass: SequelizeConfigService
    })
  ],
  controllers: [UserController, CategoryController, MethodController],
  providers: [SequelizeConfigService, UserService, CategoryService, MethodService],
})
export class AppModule {}
