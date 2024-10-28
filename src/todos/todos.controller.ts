import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('todos')
export class TodosController {
    @Get()
    getTodos(){
        return []
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
