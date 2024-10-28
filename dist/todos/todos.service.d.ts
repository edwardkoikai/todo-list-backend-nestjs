import { createTodoDto } from './Dto/create-Todo.dto';
import { updateTodoDto } from './Dto/updateTodo.dto';
export declare class TodosService {
    private todos;
    getTodos(): {
        id: number;
        title: string;
        description: string;
    }[];
    getTodo(id: number): {
        id: number;
        title: string;
        description: string;
    };
    createTodo(createTodoDto: createTodoDto): {
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
