import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
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
  FormGroupDirective,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import {
  MatchingPasswords,
  validatorsService,
} from '../../../shared/services/validators.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { HttpService } from '../../../shared/services/http.service';
import { dataInterface } from '../../../shared/interface/data.interface';
import { requestInterface } from '../../../shared/interface/request.interface';
import { AngularMaterialTableComponent } from '../angular-material-table/angular-material-table.component';
import { ErrorStateMatcher } from '@angular/material/core';
import { BootstrapTableComponent } from '../../bootstrap/bootstrap-table/bootstrap-table.component';
import { NgxMaterialIntlTelInputComponent } from 'ngx-material-intl-tel-input';

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
    AngularMaterialTableComponent,
    FormsModule,
    BootstrapTableComponent,
    NgxMaterialIntlTelInputComponent,
  ],
  templateUrl: './angular-material-form.component.html',
  styleUrl: './angular-material-form.component.scss',
})
export class AngularMaterialFormComponent implements OnInit {
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

  @Input() isMaterial!: boolean;

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
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ]),
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
      confirmPassword: new FormControl(null, [
        Validators.required,
        MatchingPasswords('password'),
      ]),
      tel: new FormControl(null, [
        Validators.required,
        // Validators.pattern(/^\d+$/),
      ]),
      // checkboxes: new FormControl(null, [Validators.required]),
      location: new FormControl(null, [Validators.required]),
      comment: new FormControl(null, [Validators.required]),
    });
    this.userForm.valueChanges?.subscribe(() => this.onValueChanges());
  }

  get name() {
    return this.userForm.get('name');
  }

  get companyName() {
    return this.userForm.get('companyName');
  }

  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }

  get confirmPassword() {
    return this.userForm.get('confirmPassword');
  }

  get tel() {
    return this.userForm.get('tel');
  }

  // get checkboxes() {
  //   return this.userForm.get('checkboxes');
  // }

  get location() {
    return this.userForm.get('location');
  }

  get comment() {
    return this.userForm.get('comment');
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
