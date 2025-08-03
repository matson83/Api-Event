import { Body, Controller, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ITaskEntity } from './interfaces/taskEntity';
import { CreateTaskDto } from './dto/create-tasks.dto';

@Controller('api/v1/tasks')
export class TasksController {
    constructor(
        private readonly TasksService:TasksService 
    ){}

    @Post()
    async createdTask(@Body() CreateTaskDto:CreateTaskDto):Promise<ITaskEntity>{
        return this.TasksService.createTask(CreateTaskDto)
    }
}
