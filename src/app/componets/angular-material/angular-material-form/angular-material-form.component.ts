import { Component } from '@angular/core';
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
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { validatorsService } from '../../../shared/services/validators.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-angular-material-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './angular-material-form.component.html',
  styleUrl: './angular-material-form.component.scss',
})
export class AngularMaterialFormComponent {
  locations: string[] = FORM_LOCATIONS;
  checkboxes: string[] = FORM_CHECKBOXES;
  formLabels = FORM_LABELS;
  formPlaceholder = FORM_PLACEHOLDER;
  formSuccess = FORM_SUCCESS;
  formErrors = FORM_ERRORS as any;
  validationMessages = FORM_VALIDATION_MESSAGES as any;
  formHelpId = FORM_HELPID;

  userForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private validators: validatorsService
  ) {}

  get form(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  onSubmit(): void {}

  addCase(): void {
    console.log(this.userForm.value);
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
