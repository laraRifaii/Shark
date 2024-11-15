import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { eye, lockClosed } from 'ionicons/icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private navCtrl: NavController,
    private userService: UserService) {
    addIcons({ eye, lockClosed });

    this.loginForm = this.fb.group({
      username: ['', [Validators.required, this.noSpacesValidator]],
      password: ['', [Validators.required, this.noSpacesValidator]],
    });
  }
  ngOnInit() {
    // This timeout is a workaround to clear any autofilled values
    setTimeout(() => {
      this.loginForm.patchValue({
        username: '',
        password: '',
      });
    }, 100);
  }

  noSpacesValidator(control: any) {
    if (control.value && control.value.includes(' ')) {
      return { hasSpaces: true };
    }
    return null;
  }
  
  handleSignUp(event: Event) {
    if (this.loginForm.valid) {
      event.preventDefault();
      this.userService.login();
      this.navCtrl.navigateRoot('/home');
    }
  }
}
