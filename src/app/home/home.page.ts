import { Component } from '@angular/core';
import { LokotronService } from '../services/lokotron.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user:any;
  users:any;
  posts:any;
  post:any={
    id:null,
    title:"",
    body:"",
    userId:null
  };
  
  compareWith:any;
  
  constructor(private api: LokotronService) {
    this.api.getPost(3).subscribe((res)=>{
      console.log(res[0]);
    },(error)=>{
      console.log(error);
    });
    
  }
  
  compareWithFn = (o1:any, o2:any) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  
  };

  guardarPost(){

  }
  createPost(){
    var post={
    title: 'titulo prueba',
    body: 'algun cuerpo del post',
    userId: 1
    }
    this.api.createPost(post).subscribe((success)=>{
    console.log(success);
    },error=>{
    console.log(error);
    })
   
}
