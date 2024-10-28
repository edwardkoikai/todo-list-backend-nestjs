"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosService = void 0;
const common_1 = require("@nestjs/common");
let TodosService = class TodosService {
    constructor() {
        this.todos = [
            { id: 0, title: 'Monday', description: 'Personalized projects' },
            { id: 1, title: 'Tuesday', description: 'House Chores' }
        ];
    }
    getTodos() {
        return this.todos;
    }
    getTodo(id) {
        const todo = this.todos.find((todo) => todo.id == id);
        if (!todo) {
            throw new common_1.NotFoundException;
        }
        return todo;
    }
    createTodo(createTodoDto) {
        const newTodo = {
            ...createTodoDto,
            id: Date.now()
        };
        this.todos.push(newTodo);
        return newTodo;
    }
    updateTodo(id, updateTodoDto) {
        this.todos = this.todos.map((todo) => {
            if (todo.id == id) {
                return { ...todo, ...updateTodoDto };
            }
            return todo;
        });
        return this.getTodo(id);
    }
    removeTodo(id) {
        const toberemoved = this.getTodo(id);
        this.todos = this.todos.filter((todo) => todo.id !== id);
        return toberemoved;
    }
};
exports.TodosService = TodosService;
exports.TodosService = TodosService = __decorate([
    (0, common_1.Injectable)()
], TodosService);
//# sourceMappingURL=todos.service.js.map