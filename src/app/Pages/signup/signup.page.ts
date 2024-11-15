import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { restaurant } from 'ionicons/icons';
import { NavController } from '@ionic/angular';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,

  ) {
    this.loginForm = this.fb.group({
      name: ['', [Validators.required, this.noSpaces]],
      restaurant_name: ['', [Validators.required, this.noSpaces]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.loginForm.patchValue({
        name: '',
        restaurant_name: '',
        phone: '',
        address: '',
      });
    }, 100);
  }

  noSpaces(control: any) {
    if (control.value && control.value.includes(' ')) {
      return { hasSpaces: true };
    }
    return null;
  }

onSubmit(){
  if (this.loginForm.valid){
    console.log('form submitted', this.loginForm.value)  }
}
  
}
