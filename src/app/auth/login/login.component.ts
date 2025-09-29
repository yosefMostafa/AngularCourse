import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, delay, map, of } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [ReactiveFormsModule]
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('', {validators: [Validators.required, Validators.email], asyncValidators: [isEmailUnique] }),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      MyValidators.password
    ]),
  });
  private destroyRef = inject(DestroyRef);
  ngOnInit() {
    const formData = localStorage.getItem('loginForm');
    if (formData) {
      
      this.form.controls['email'].setValue(JSON.parse(formData).email);
    }
    const sub = this.form.valueChanges.pipe(debounceTime(300)).subscribe((value) => {
      localStorage.setItem('loginForm', JSON.stringify({email:value.email}));
    });
    this.destroyRef.onDestroy(() => sub.unsubscribe());
  }
  onSubmit() {
    console.log(this.form);
    if (this.form.valid) {
      const { email, password } = this.form.value;
      console.log('Email:', email);
      console.log('Password:', password);
    }
  }
}
class MyValidators {
  static password(control: AbstractControl) {
    if (!control.value) {
      return null;
    }
    const hasUpperCase = /[A-Z]+/.test(control.value);
    const hasLowerCase = /[a-z]+/.test(control.value);
    const hasNumber = /[0-9]+/.test(control.value);
    const passwordValid = hasUpperCase && hasLowerCase && hasNumber;
    return !passwordValid ? { passwordStrength: true } : null;
  }

}

function isEmailUnique(control: AbstractControl) {
  const existingEmails = ['test@example.com', 'user@example.com'];
  return of(existingEmails.includes(control.value)).pipe(
    delay(2000),
    map((isTaken) => (isTaken ? { emailTaken: true } : null))
  );
}
