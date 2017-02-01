import { Component, OnInit } from '@angular/core';
import{AuthenticationService}from '../security/authentication.service';
import { Router } from '@angular/router';
import {User} from '../security/user';
import { FormsModule,ReactiveFormsModule,FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})

export class LoginAdminComponent implements OnInit {
   public user = new User('','');
   public errorMsg = '';
   public login_data:any;
   loginForm: FormGroup;
  constructor(private auths : AuthenticationService,private formbuilder: FormBuilder, private router: Router) {

     this.loginForm =formbuilder.group({
       email:  ['', Validators.required],
       password: ['', Validators.required]
    });
   }

  ngOnInit() {
   
  }

  Check_User(){
    
   this.auths.login(this.loginForm.controls['email'].value,this.loginForm.controls['password'].value)
    .subscribe(
        data => { this.login_data =data;
          if(this.login_data['error_code'] =="0"){
              
               localStorage.setItem('currentUser', JSON.stringify(this.login_data['user_data']));
               this.router.navigate(['/admin']);
             
          }else
          {
            this.errorMsg = this.login_data['error_message'];
          }
         
        },
        err => console.error(err)
      );
      
  }

  

}
