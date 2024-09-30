import { Controller, Get, Post, Delete, Put, Body, Param, ConflictException, NotFoundException, HttpCode } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from 'src/dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService){}

    @Get('health-check')
    async healthCheck () {
        return "Okidokis :)"
    }

    @Get()
    findAll(){
        return this.taskService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.taskService.findOne(id);
    }

    @Post()
    async create(@Body() body: CreateTaskDto){
        try{
            return await this.taskService.create(body);
        }catch(error){
            if(error.code ===11000){
                throw new ConflictException('Task already exist');
            }
            throw(error);
        }
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string){
        const task = await this.taskService.delete(id);
        if(!task) throw new NotFoundException('Task Not found');
        return task;
    }

    @Put(':id')
    @HttpCode(204)
    async update( @Param('id') id: string, @Body() body: any){
        const task = await this.taskService.update(id, body);
        if(!task) throw new NotFoundException('Task Not found');
    }
}
