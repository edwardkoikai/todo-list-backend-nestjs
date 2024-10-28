import { TodosService } from './todos.service';
import { createTodoDto } from './Dto/create-Todo.dto';
import { updateTodoDto } from './Dto/updateTodo.dto';
export declare class TodosController {
    private readonly todosService;
    constructor(todosService: TodosService);
    getTodos(): {
        id: number;
        title: string;
        description: string;
    }[];
    getOneTodo(id: number): {
        id: number;
        title: string;
        description: string;
    };
    createTodos(createTodoDto: createTodoDto): {
        id: number;
        title: string;
        description: string;
    };
    updateTodo(id: number, updateTodoDto: updateTodoDto): {
        id: number;
        title: string;
        description: string;
    };
    removeTodo(id: number): {
        id: number;
        title: string;
        description: string;
    };
}
