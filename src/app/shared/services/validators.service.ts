import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class validatorsService {
  constructor() {}

  emailValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const emailRegex =
      /^([a-zA-Z0-9_.\-])+@(([a-zA-Z0-9\0])+\.)+([a-zA-Z0-9]{2,6})$/;
    const result = emailRegex.test(value);

    if (!result) return { emailValidator: { value } };

    return null;
  }
}

export function MatchingPasswords(controlName: string) {
  return (control: AbstractControl): ValidationErrors | null => {
    const passwordControl = control.parent?.get(controlName);
    if (!passwordControl) {
      return null;
    }
    const password = control.value;
    const confirmPassword = passwordControl.value;
    return password !== confirmPassword ? { notMatching: true } : null;
  };
}
