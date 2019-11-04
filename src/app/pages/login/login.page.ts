import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, FormControl, Validators,
  FormGroupDirective, NgForm } from '@angular/forms';

import { LoadingController } from '@ionic/angular';

import { Helper } from 'src/app/helper/helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;
  submitted = false;

  constructor(public router: Router, private authService: AuthService,
              public loadingController: LoadingController, private formBuilder: FormBuilder) {
                this.loginForm = this.formBuilder.group({
                  email: new FormControl('', [Validators.required]),
                  password: new FormControl('', [Validators.required, Validators.pattern(Helper().regExPassword())])
                });
               }

  get f() { return this.loginForm.controls; }

  ngOnInit() {
  }

  doLogin(form) {
    
    this.authService.login(form.value);
    // .subscribe((res) => {
    //   this.router.navigateByUrl('menu');
    // });
  }

}
