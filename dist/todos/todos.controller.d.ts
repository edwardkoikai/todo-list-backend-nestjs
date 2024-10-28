import { TodosService } from './todos.service';
export declare class TodosController {
    private readonly todosService;
    constructor(todosService: TodosService);
    getTodos(): {
        id: number;
        title: string;
        description: string;
    }[];
    getOneTodo(): {};
    createTodos(): {};
    updateTodos(): {};
    removeTodos(): {};
}
