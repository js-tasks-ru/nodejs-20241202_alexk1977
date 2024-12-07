import { Injectable, NotFoundException } from "@nestjs/common";
import { Task } from "./task.model";

@Injectable()
export class TasksService {
  private id = 1
  private tasks: Task[] = []

  getAllTasks(): Task[] {
    return this.tasks
  }

  getTaskById(id: string): Task {
    const task = this.tasks.find(el => el.id === id)
    if (!task) throw new NotFoundException(`Error: Can not find task with id ${id}. Not found.`)
    return task
  }

  createTask(task: Task): Task {
    task.id = this.id.toString()
    this.id++
    this.tasks.push(task)
    return task
  }

  updateTask(id: string, update: Task): Task {
    const taskIndex = this.tasks.findIndex(el => el.id === id)
    if (taskIndex === -1) throw new NotFoundException(`Error: Can not update task with id ${id}. Not found.`)
    update.id = id
    this.tasks[taskIndex] = update
    return update
  }

  deleteTask(id: string): Task {
    const taskIndex = this.tasks.findIndex(el => el.id === id)
    if (taskIndex === -1) throw new NotFoundException(`Error: Can not delete task with id ${id}. Not found.`)
    const deletedTask = this.tasks[taskIndex]
    this.tasks.splice(taskIndex, 1)
    return deletedTask
  }
}
