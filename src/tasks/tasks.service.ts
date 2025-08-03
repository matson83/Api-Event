import { Injectable } from '@nestjs/common';
import { TasksRepository } from './tasks.repository';
import { ITaskEntity } from './interfaces/taskEntity';
import { CreateTaskDto } from './dto/create-tasks.dto';

@Injectable()
export class TasksService {
    constructor(
        private readonly TasksRepository:TasksRepository
    ){}

    async createTask(CreateTaskDto:CreateTaskDto):Promise<ITaskEntity>{
        const createTask = this.TasksRepository.createTask(CreateTaskDto)
        return createTask;
    }
}
