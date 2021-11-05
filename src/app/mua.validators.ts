import {FormControl} from '@angular/forms';

export class MuaValidators {
  static restrictedEmails(control: FormControl): { [key: string]: boolean } | null {
    if (['a@mail.ru', 'b@mail.ru'].includes(control.value)) {
      return {
        restrictedEmail: true
      };
    }
    return null;
  }
}
