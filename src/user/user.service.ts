import { Inject, Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: typeof User
      ) {}

      async findAll(): Promise<User[]> {
        return await this.userRepository.findAll<User>();
      }

      async findById(id:number):Promise<User>{
        return await this.userRepository.findByPk(id);
      }

      async add(body):Promise<User[]>{
        body.type="user";
        await this.userRepository.create(body);
        return await this.userRepository.findAll<User>()

      }

      async removeById(id:number):Promise<User[]>{
       let user= await this.userRepository.findByPk(id)
        await user?.destroy();
        return await this.userRepository.findAll<User>();
      }

      async update (body:User , id:number):Promise<User[]>{
        let user= await this.userRepository.findByPk(id)
        await user?.update(body);
        return await this.userRepository.findAll<User>();

      }

      
}
