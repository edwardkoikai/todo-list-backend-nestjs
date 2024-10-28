import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, ValidationPipe } from '@nestjs/common';
import { TodosService } from './todos.service';
import { createTodoDto } from './Dto/create-Todo.dto';
import { updateTodoDto } from './Dto/updateTodo.dto';

@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) {}
    @Get()
    getTodos(){
        return this.todosService.getTodos()
    }

    @Get(':id')
    getOneTodo(@Param('id', ParseIntPipe) id: number){
        try{
            return this.todosService.getTodo(id)
        }catch (err) {
            throw new NotFoundException
        }
    }

    @Post()
    createTodos(@Body(new ValidationPipe) createTodoDto: createTodoDto){
        return this.todosService.createTodo(createTodoDto)
    }

    @Put(':id')
    updateTodo(@Param('id', ParseIntPipe) id: number, @Body() updateTodoDto: updateTodoDto) {
        return this.todosService.updateTodo(id, updateTodoDto)

    }

    @Delete(':id')
    removeTodo(@Param('id', ParseIntPipe) id: number){
        return this.todosService.removeTodo(id)
    }
    
}
