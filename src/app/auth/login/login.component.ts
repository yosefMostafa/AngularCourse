import { afterNextRender, Component, DestroyRef, inject, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [FormsModule],
})
export class LoginComponent {

  private form = viewChild<NgForm>('form');
  private destroyRef = inject(DestroyRef);

  constructor
  () {
    afterNextRender(() => {
      const savedForm = window.localStorage.getItem('loginForm');
      if (savedForm) {
        const parsedForm = JSON.parse(savedForm);
        setTimeout(() => {
          this.form()?.setValue({
            email: parsedForm.email,
            password: '',
          });
        },1);
      }
     const sub =  this.form()?.valueChanges?.pipe(debounceTime(500)).subscribe({
        next: (value) => {
        window.localStorage.setItem('loginForm', JSON.stringify({email: value.email}));
      }
      });
      this.destroyRef.onDestroy(() => {
        sub?.unsubscribe();
      });
    });

  }


  onSubmit(formData: NgForm) {
    if (formData.form.valid) {
      const enteredEmail = formData.form.value.email;
      const enteredPassword = formData.form.value.password;
      console.log(enteredEmail, enteredPassword);
      formData.form.reset();
    }
  }
}
