import { Delete, Injectable, NotFoundException } from '@nestjs/common';
import { createTodoDto } from './Dto/create-Todo.dto';
import { updateTodoDto } from './Dto/updateTodo.dto';

@Injectable()
export class TodosService {
    private todos = [
        {id: 0, title: 'Monday', description: 'Personalized projects'},
        {id: 1, title: 'Tuesday', description: 'House Chores'}
    ]

    getTodos(){
        return this.todos
    }
    getTodo(id: number){
        const todo = this.todos.find((todo)=> todo.id == id)

        if (!todo){
            throw new NotFoundException
        }

        return todo
    }
    createTodo(createTodoDto: createTodoDto){
        const newTodo = {
            ...createTodoDto,
            id: Date.now()
        }

        this.todos.push(newTodo)
        return newTodo

        
    }
    updateTodo(id: number, updateTodoDto: updateTodoDto){
        this.todos = this.todos.map((todo)=>{
            if (todo.id == id ){
                return {...todo, ...updateTodoDto}
            }
            return todo
        })
        return this.getTodo(id)
    }
    removeTodo(id: number){
        const toberemoved = this.getTodo(id)
        this.todos = this.todos.filter((todo)=> todo.id !== id)
        return toberemoved

    }
}
