import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    details=[{
      "name": "Naga",
      "mobile": "12345",
      "email": "naga1@email.com"
  },
  {
      "name": "Naga",
      "mobile": "12345",
      "email": "naga2@email.com"
  },
  {
      "name": "Naga",
      "mobile": "12345",
      "email": "naga3@email.com"
  },
  {
      "name": "Naga",
      "mobile": "12345",
      "email": "naga4@email.com"
  }];
  getAllProducts() {
    return this.details;
  }


  insertUser(name:string, mobile:string, email:string){
    const newProduct={
      name:name,
      mobile:mobile,
      email:email,
    }
    this.details.push(newProduct);
    return {
      data:newProduct,
      message:"Added Successfully!"
    };
  }

  deleteUser(email:string){
    let index=-1;
    for (let i=0; i<this.details.length;i++){
      index++;
      if(this.details[i].email===email)
        break;
    }
    //console.log(index);
    this.details.splice(index,1)
    return [... this.details]
  }
}
