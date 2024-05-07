
import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {

  static passwordStrength() {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }

      //* Validation checks criteria
      const hasUpperCase = /[A-Z]+/.test(value);
      const hasLowerCase = /[a-z]+/.test(value);
      const hasNumeric = /[0-9]+/.test(value);
      const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value);
      const passwordValid =
        hasUpperCase &&
        hasLowerCase &&
        hasNumeric &&
        hasSpecial &&
        value.length >= 8;

      //*The password is considered valid if it meets all the criteria.
      return !passwordValid ? { passwordStrength: true } : null;
    };
  }
}