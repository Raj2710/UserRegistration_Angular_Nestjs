import { Controller, Get, Post, Body,Param,Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllUsers() {
    return this.appService.getAllProducts();
  }

  @Post()
  addUser(
    @Body("name") name:string,
    @Body("mobile") mobile:string,
    @Body("email") email:string,
  ){
    return this.appService.insertUser(name,mobile,email);
  }

  @Delete(':email')
  deleteProduct(
    @Param('email') email:string 
  ){
      return this.appService.deleteUser(email)
  }
}
