import { Injectable } from '@nestjs/common';
import { user } from './user.entity';

@Injectable()
export class TestService {
  private listOfUser: user[] = [
    {
      id: 1,
      name: 'prayag',
      role: 'worker',
    },
    {
      id: 2,
      name: 'jeel',
      role: 'worker',
    },
  ];

  //findAll method
  findAll() {
    return this.listOfUser;
  }

  //get one user
  getUserById(id: number) {
    const findUser = this.listOfUser.find((e) => e.id == id);
    return findUser;
  }

  addUser(recode: user) {
    this.listOfUser.push(recode);
    return this.listOfUser;
  }

  updateRecode(id: number, recodeData: user) {
    const findUser = this.listOfUser.findIndex((e) => e.id == id);
    if (findUser) {
      this.listOfUser[findUser] = recodeData;
      return this.listOfUser[findUser];
    } else {
      return 'user not found';
    }
  }
}
