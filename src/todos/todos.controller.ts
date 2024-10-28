import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) {}
    @Get()
    getTodos(){
        return this.todosService.getTodos()
    }

    @Get(':id')
    getOneTodo(){
        return {}
    }

    @Post()
    createTodos(){
        return {}
    }

    @Put(':id')
    updateTodos(){
        return {}
    }

    @Delete(':id')
    removeTodos(){
        return {}
    }
}
