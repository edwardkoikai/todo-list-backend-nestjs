import { IsEnum, MinLength } from "class-validator"

export class createTodoDto{
    @IsEnum(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])
    title: string

    @MinLength(3)
    description: string
}