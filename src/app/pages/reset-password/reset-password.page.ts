import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


import { LoadingController } from '@ionic/angular';
import { MustMatch } from 'src/app/helper/mustMatch.validator';
import { Helper } from 'src/app/helper/helper';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  public resetPassForm: FormGroup;
  submitted = false;

  constructor(public router: Router, public authService: AuthService,
              public loadingController: LoadingController, public formBuilder: FormBuilder) {
                this.resetPassForm = this.formBuilder.group({
                  password: new FormControl('', [Validators.required, Validators.pattern(Helper().regExPassword())]),
                  passwordcheck: new FormControl('', Validators.required)
                },
                {
                  validator: MustMatch('password', 'passwordcheck')
                }
                );
              }

  get f() { return this.resetPassForm.controls; }

  ngOnInit() {
  }

  resetPass(form) {
    // this.authService.login(form.value).subscribe((res) => {
      this.router.navigateByUrl('menu');
    // });
  }

}
