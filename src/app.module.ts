import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [ 
      MongooseModule.forRoot('mongodb+srv://permissionaryAdmin:PermissionaryAdmin97@permissionariescluster.czamibr.mongodb.net/tasksdb'),
    TasksModule],
})
export class AppModule {}


