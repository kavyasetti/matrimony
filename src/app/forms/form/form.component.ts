import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private router: Router) {}
  username:any;
  password:any;
  error:any;
  navigateToHome(username:any,password:any){
    this.router.navigate(['/main']);

    // if(this.username=="rakesh",this.password=="123"){
    //   this.router.navigate(['./main']);
    // }
    // else{
    //   this.error="password and confirm password mismatches!";
    //   console.log("Error");
      
    // }
  }
}
