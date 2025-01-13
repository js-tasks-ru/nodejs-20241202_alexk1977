import { Controller, Get, Post, Patch, Delete, Body, Param } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

@Controller("tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto) {
    return await this.tasksService.create(createTaskDto);
  }

  @Get()
  async findAll() {
    return await this.tasksService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return await this.tasksService.findOne(+id);
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return await this.tasksService.update(+id, updateTaskDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    await this.tasksService.remove(+id);
    return { "message": "Task deleted successfully" };
  }
}
