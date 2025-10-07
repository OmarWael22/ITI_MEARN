import { Component } from '@angular/core';
import { User } from '../../types';
import { FormBuilder,FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AutoFocusDirective } from "../../directive/login-only";
@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule, AutoFocusDirective],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  userForm! : FormGroup
  loginFlag! : boolean
  ngOnInit(): void {
    if(localStorage.getItem('name'))
        this.loginFlag = true;
    this.userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25)
      ])
    });
  }

  Login(){
    if (this.userForm.valid) {
      localStorage.setItem('name',this.userForm.value['name'])
      localStorage.setItem('email',this.userForm.value['email'])
      localStorage.setItem('password',this.userForm.value['password'])
      // this.userForm.reset()
      this.loginFlag = true
    }else {
      this.userForm.markAllAsTouched();
    }

  }
  Logout(){
    this.loginFlag = false;
    this.userForm.reset();
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
  }
}
