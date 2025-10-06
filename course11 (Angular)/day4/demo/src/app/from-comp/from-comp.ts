import { Component, EventEmitter, Output } from '@angular/core';
import { user } from '../types';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-from-comp',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './from-comp.html',
  styles: ``,
})
export class FromComp {
  // name: string = '';
  // age: string = '';
  @Output() sendDataEvent = new EventEmitter<user>();
  userObj: user = { id: '', name: '', age: '' };
  id = 0;

  // reactive form
  userForm = new FormGroup({
    name: new FormControl('', [Validators.maxLength(10), Validators.required]),
    age: new FormControl('', [Validators.max(35), Validators.required]),
  });

  onSubmit() {
    if (this.userForm.valid && this.userForm.value['name'] && this.userForm.value['age']) {
      let user: user = {
        id: ++this.id,
        name: this.userForm.value['name'],
        age: this.userForm.value['age'],
      };
      this.sendDataEvent.emit(user);
    }
    console.log(this.userForm);
  }
}
