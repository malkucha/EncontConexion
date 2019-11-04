import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, FormControl, Validators,
  FormGroupDirective, NgForm } from '@angular/forms';

import { LoadingController } from '@ionic/angular';

import { Helper } from 'src/app/helper/helper';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.page.html',
  styleUrls: ['./recovery-password.page.scss'],
})
export class RecoveryPasswordPage implements OnInit {

  public recoverPassForm: FormGroup;
  submitted = false;

  constructor(public router: Router, private authService: AuthService,
              public loadingController: LoadingController, private formBuilder: FormBuilder) {
                this.recoverPassForm = this.formBuilder.group({
                  email: new FormControl('', [Validators.required, Validators.pattern(Helper().regExEmail())])
                });
               }

  get f() { return this.recoverPassForm.controls; }

  ngOnInit() {
  }

  recoverPass(form) {
    // this.authService.login(form.value).subscribe((res) => {
      this.router.navigateByUrl('menu');
    // });
  }
}
