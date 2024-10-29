import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { User } from "../entities/user.entity";


@Controller("/users")
export class UserController{

    constructor(private readonly userService: UserService){ }

    @Get('/all')
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<User[]>{
        return this.userService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<User>{
        return this.userService.findById(id)
    }

    @Get('/email/:email')
    @HttpCode(HttpStatus.OK)
    findByEmail(@Param('email') email: string): Promise<User>{
        return this.userService.findByEmail(email)
    }

    @Post('/register')
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() user: User): Promise<User>{
        return this.userService.create(user)
    }
    
    @Put('/update')
    @HttpCode(HttpStatus.OK)
    async update(@Body() user: User): Promise<User>{
        return this.userService.update(user)
    }

}