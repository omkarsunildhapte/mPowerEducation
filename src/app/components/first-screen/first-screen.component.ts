import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-screen',
  templateUrl: './first-screen.component.html',
  styleUrls: ['./first-screen.component.css']
})
export class FirstScreenComponent {

  IsOptSent: boolean = false;
  registerForm: FormGroup;
  showOtpInputs = false;
  downloadForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.downloadForm = this.fb.group({
      mobile: ['', [Validators.required, Validators.pattern(/^-?\d+\.?\d*$/)]],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)]],
    });
    this.registerForm = this.fb.group({
      mobile: ['', [Validators.required, Validators.pattern(/^-?\d+\.?\d*$/)]],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)]],
      Motp: ['', [Validators.pattern(/[0-9]{4}/)]],
      Eotp: ['', [Validators.pattern(/[0-9]{4}/)]],
    });
  }
  ngOnInit() {
  }

  onRegister() {
    if (this.registerForm.valid) {
      this.showOtpInputs = true;
    }
  }

  onOtpSubmit() {
    if (this.registerForm.get('Motp')?.valid && this.registerForm.get('Eotp')?.valid) {
    }
  }

  onSubmit() {
    if (this.downloadForm.valid) {
    }
  }
}
