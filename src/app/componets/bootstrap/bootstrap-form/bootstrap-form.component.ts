import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { validatorsService } from '../../../shared/services/validators.service';
import {
  FORM_CHECKBOXES,
  FORM_ERRORS,
  FORM_HELPID,
  FORM_LABELS,
  FORM_LOCATIONS,
  FORM_PLACEHOLDER,
  FORM_SUCCESS,
  FORM_VALIDATION_MESSAGES,
} from '../../../shared/data/form-data';
import { HttpService } from '../../../shared/services/http.service';
import { dataInterface } from '../../../shared/interface/data.interface';
import { requestInterface } from '../../../shared/interface/request.interface';

@Component({
  selector: 'app-bootstrap-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './bootstrap-form.component.html',
  styleUrl: './bootstrap-form.component.scss',
})
export class BootstrapFormComponent implements OnInit {
  locations: string[] = FORM_LOCATIONS;
  checkboxes: string[] = FORM_CHECKBOXES;
  formLabels = FORM_LABELS;
  formPlaceholder = FORM_PLACEHOLDER;
  formSuccess = FORM_SUCCESS;
  formErrors = FORM_ERRORS as any;
  validationMessages = FORM_VALIDATION_MESSAGES as any;
  formHelpId = FORM_HELPID;

  userForm!: FormGroup;

  data: dataInterface[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private validators: validatorsService,
    private httpService: HttpService
  ) {}

  get form(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }

  ngOnInit(): void {
    this.initializeForm();
    this.httpService.readData().subscribe((res) => {
      this.data = res;
    });
  }

  onSubmit(): void {
    this.httpService.createData(this.userForm.value).subscribe({
      next: (res: requestInterface) => {
        this.data.push({ ...{ key: res.name }, ...this.userForm.value });
        this.userForm.reset();
        this.data = [...this.data];
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  private initializeForm(): void {
    this.userForm = this.formBuilder.group({
      name: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      companyName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [
        Validators.required,
        this.validators.emailValidator,
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ]),
      confirmPassword: new FormControl(null, [Validators.required]),
      tel: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^\d+$/),
      ]),
      checkboxes: new FormControl(null, [Validators.required]),
      location: new FormControl(null, [Validators.required]),
      comment: new FormControl(null, [Validators.required]),
    });
    this.userForm.valueChanges?.subscribe(() => this.onValueChanges());
  }

  onValueChanges(): void {
    const form = this.userForm;

    Object.keys(this.formErrors).forEach((field) => {
      const control = form.get(field);
      this.formErrors[field] = '';

      if (control?.invalid && (control.dirty || control.touched)) {
        const messages = this.validationMessages[field];
        Object.keys(control.errors as ValidationErrors).every((key) => {
          this.formErrors[field] = messages[key];
        });
      }
    });
  }
}
