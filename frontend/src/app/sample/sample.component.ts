import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  pageName:string = "Self Registration"
  name:string = ""
  mob:string =""
  email:string="" 

  details:any[]= [];
  allowButton:boolean = true;
  constructor(private dataService: DataService) { 
    setTimeout(()=>{
      this.allowButton  = false;
    },5000)
  }

  ngOnInit(): any {
    this.dataService.sendGetRequest().subscribe((data:any[])=>{
      console.log(data);
      this.details= data
      
    })
  }

  updateData():void{
      this.dataService.sendPostRequest(this.name,this.mob,this.email).subscribe((data:any[])=>{
        console.log(data);
      })
  }


}
