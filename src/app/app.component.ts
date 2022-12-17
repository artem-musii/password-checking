/* eslint-disable max-len */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  easyRegex = /^(?:[\d]*$)|(?:[a-zA-Z]*$)|(?:[-!@#%^ $&*()_+=[\]{}|\\:;"'<>,.?/]*$)/;

  mediumRegex = /^(?:(?=.*[a-zA-Z])(?=.*[-!@#%^&*()_+ $=[\]{}|\\:;"'<>,.?/]).*$)|(?:(?=.*[a-zA-Z])(?=.*[\d]).*$)|(?:(?=.*[\d])(?=.*[-!@#% $^&*()_+=[\]{}|\\:;"'<>,.?/]).*$)/;

  strongRegex = /^(?=.*[a-zA-Z])(?=.*[\d])(?=.*[-!@#%^ &*$()_+=[\]{}|\\:;"'<>,.?/]).*$/;

  passwordStrength = '';
  password = '';

  checkPasswordStrength(value: string) {
    this.password = value;

    if (this.easyRegex.test(value)) {
      this.passwordStrength = 'easy';
    }

    if (this.mediumRegex.test(value)) {
      this.passwordStrength = 'medium';
    }

    if (this.strongRegex.test(value)) {
      this.passwordStrength = 'strong';
    }

    if (value.length < 8) {
      this.passwordStrength = 'short';
    }
  }
}
