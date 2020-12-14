import { UsernameValidators } from './../common/validators/username.validators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent {

  form = new FormGroup({
    oldPassword: new FormControl('', Validators.required, UsernameValidators.validatePassword),
    newPassword: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  }, {
    validators: UsernameValidators.confirmPassword
  })

  get old() {
    return this.form.get('oldPassword');
  }

  get new() {
    return this.form.get('newPassword');
  }

  get confirm() {
    return this.form.get('confirmPassword');
  }

}
