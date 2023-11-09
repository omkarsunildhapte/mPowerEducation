import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CandidateFormData } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-secound',
  templateUrl: './secound.component.html',
  styleUrls: ['./secound.component.css']
})
export class SecoundComponent {
  @ViewChild('stateSelect') stateSelect!: ElementRef;
  @ViewChild('ddlYears') ddlYears!: ElementRef;
  @ViewChild('SSCStudy') SSCStudy!: ElementRef;
  @ViewChild('IStudy') IStudy!: ElementRef;
  userForm: FormGroup = new FormGroup({});
  submitted = false;
  candidate: CandidateFormData | undefined;
  constructor(private formBuilder: FormBuilder, private el: ElementRef) {
  }
  ngAfterViewInit() {
    const currentYear = new Date().getFullYear();
    this.populateYearsDropdown(this.ddlYears.nativeElement, currentYear);
    this.populateYearsDropdown(this.SSCStudy.nativeElement, currentYear);
    this.populateYearsDropdown(this.IStudy.nativeElement, currentYear);
  }
  get f() { return this.userForm.controls; }

  ngOnInit() {
    this.userForm?.valueChanges.subscribe((data: any) => {
      for (var key in data) {
        if (data[key] && data[key].toString().trim() == "") {
          this.userForm?.get(key)?.setValue("", { emitEvent: false });
        }
      }
    });
    document.body.className = "background-bg-1";
    this.userForm = this.formBuilder.group({
      c_firstName: [this.candidate?.c_firstName || '', Validators.required],
      c_lastName: [this.candidate?.c_lastName || '', Validators.required],
      F_name: [this.candidate?.F_name || '', Validators.required],
      M_name: [this.candidate?.M_name || '', Validators.required],
      dateOfBirth: [this.candidate?.dateOfBirth || '', Validators.required],
      annualIncome: [this.candidate?.annualIncome || '', [Validators.required, Validators.pattern("^[0-9]*$")]],
      state: [this.candidate?.state || '', Validators.required],
      category: [this.candidate?.category || '', Validators.required],
      B_District: [this.candidate?.B_District || '', Validators.required],
      gender: [this.candidate?.gender || '', Validators.required],
      className: [this.candidate?.className || '', Validators.required],
      AFC: [this.candidate?.AFC || '', Validators.required],
      Qualifyingexam: [this.candidate?.Qualifyingexam || '', Validators.required],
      mobileNumber: [this.candidate?.mobileNumber || '', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      email: [this.candidate?.email || '', [Validators.required, Validators.email]],
      aadharnumber: [this.candidate?.aadharnumber || '', [Validators.required, Validators.pattern("^[0-9]{12}$")]],
      Q_Exam: [this.candidate?.Q_Exam || '', Validators.required],
      Q_Medium: [this.candidate?.Q_Medium || '', Validators.required],
      YOP_Qualifying: [this.candidate?.YOP_Qualifying || '', Validators.required],
      YOS_SSC: [this.candidate?.YOS_SSC || '', Validators.required],
      Place_SSC: [this.candidate?.Place_SSC || '', Validators.required],
      YOS_Inter: [this.candidate?.YOS_Inter || '', Validators.required],
      Place_Inter: [this.candidate?.Place_Inter || '', Validators.required],
      ClassesToOpt: [this.candidate?.ClassesToOpt || '', Validators.required],
      dec_1: [this.candidate?.dec_1 || false, Validators.requiredTrue],
      dec_2: [this.candidate?.dec_2 || false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    } else {
      this.validateAllFormFields(this.userForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      } else {
      }
    });
  }

  onChangeState() {
    const state = this.stateSelect.nativeElement.value;
    const districts = document.querySelectorAll('.dist');
    districts.forEach((district) => {
      if (district instanceof HTMLElement) {
        district.style.display = 'none';
      }
    });
    if (state) {
      const districtSelector = `.${state}`;
      const district = document.querySelector(districtSelector);
      if (district instanceof HTMLElement) {
        district.style.display = 'block';
      }
    }
  }

  private populateYearsDropdown(element: HTMLElement, currentYear: number) {
    for (let i = 1950; i <= currentYear; i++) {
      const option = document.createElement('option');
      option.innerHTML = i.toString();
      option.value = i.toString();
      element.appendChild(option);
    }
  }
  states: string[] = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
  ];
  genderOptions = [
    { value: '', label: 'Select Gender' },
    { value: 'female', label: 'Female' },
    { value: 'male', label: 'Male' },
    { value: 'other', label: 'Other' },
  ];
  categoryOptions = [
    { value: '', label: 'Select Category' },
    { value: 'oc', label: 'OC (Open Category)' },
    { value: 'sc', label: 'SC (Scheduled Caste)' },
    { value: 'st', label: 'ST (Scheduled Tribe)' },
    { value: 'bc-a', label: 'BC-A (Backward Class-A)' },
    { value: 'bc-b', label: 'BC-B (Backward Class-B)' },
    { value: 'bc-c', label: 'BC-C (Backward Class-C)' },
    { value: 'bc-d', label: 'BC-D (Backward Class-D)' },
    { value: 'bc-e', label: 'BC-E (Backward Class-E)' },
    { value: 'eca', label: 'ECA (Extracurricular Activities): NCC/NSS/Sports/Cultural Activities' },
    { value: 'pvc', label: 'Physically Challenged - Visually Challenged' },
    { value: 'phi', label: 'Physically Challenged - Hearing Impaired' },
    { value: 'pcoc', label: 'Physically Challenged - Orthopedically Challenged' },
    { value: 'cap', label: 'CAP (Children of Armed Personnel)' },
    { value: 'ews', label: 'EWS (Economically Weaker Sections)' },
  ];
  classOptions = [
    { value: '', label: 'Select Classes' },
    { value: 'offline', label: 'Offline SV University Campus' },
    { value: 'online', label: 'Online' },
  ];
}
