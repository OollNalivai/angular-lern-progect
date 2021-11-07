import {AbstractControl, FormControl, ValidationErrors} from '@angular/forms';
import {IMapB} from './mua.component';

export class MuaValidators {
  static restrictedEmails(control: FormControl): IMapB | null {
    if (['a@mail.ru', 'b@mail.ru'].includes(control.value)) {
      return {
        restrictedEmail: true,
      };
    }
    return null;
  }

  static uniqEmail(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (['async0@mail.ru', 'async1@mail.ru'].includes(control.value)) {
          resolve({uniqEmail: true});
        } else {
          resolve(null);
        }
      }, 1999);
    });
  }
}



