import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from 'src/schemas/task.schema';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from 'src/dto/update-task.dto';





@Injectable()
export class TasksService {
    constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

    async findAll(){
        return this.taskModel.find();
    }

    async create(creatTask: CreateTaskDto){
        const newTask = new this.taskModel(creatTask);
        return newTask.save();
    }

    async findOne(id: string){
        return this.taskModel.findById(id);
    }

    async delete(id: string){
        return this.taskModel.findByIdAndDelete(id);
    }

    async update(id: string, Task: UpdateTaskDto){
        return this.taskModel.findByIdAndUpdate(id, Task, {new: true});
    }

}
