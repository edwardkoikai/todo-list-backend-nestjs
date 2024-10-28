import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
    private todos = [
        {id: 0, title: 'Monday', description: 'Personalized projects'},
        {id: 0, title: 'Tuesday', description: 'House Chores'}
    ]

    getTodos(){
        return this.todos
    }
    
}
