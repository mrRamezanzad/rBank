import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterDTO } from 'src/auth/dto/register.dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(registerDto: RegisterDTO): Promise<User> {
    try {
      const user: User = this.userRepository.create(registerDto);
      return await this.userRepository.save(user);
    } catch (e) {
      console.log(e);
      if (e.message.includes('duplicate'))
        throw new BadRequestException('mobile number is registered already');
    }
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<UpdateResult> {
    return await this.userRepository.update({ id }, updateUserDto);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.userRepository.delete({ id });
  }
}
