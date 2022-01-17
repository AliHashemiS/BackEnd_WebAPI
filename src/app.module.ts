import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { SequelizeConfigService } from './services/sequelize-config/sequelize-config.service';
import { UserService } from './services/user/user.service';
import { UserController } from './controllers/user/user.controller';
@Module({
  imports: [
    ConfigModule.forRoot({ 
      isGlobal: true 
    }),
    SequelizeModule.forRootAsync({
      useClass: SequelizeConfigService
    })
  ],
  controllers: [UserController],
  providers: [SequelizeConfigService, UserService],
})
export class AppModule {}
