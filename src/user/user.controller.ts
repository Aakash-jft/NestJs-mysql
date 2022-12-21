import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Get()
    findall(){
        return  this.userService.findAll();
    }

    @Get(":id")
    findById(@Param("id") id:string){
        return this.userService.findById(+id);
    }

    @Post()
    add(@Body() body){
        return this.userService.add(body);
    }

    @Delete(":id")
    remove(@Param("id") id:string){
        return this.userService.removeById(+id);
    }

    @Patch(":id")
    update(@Param("id") id:string,@Body() body:User){
        return this.userService.update(body,+id);
    }
}
