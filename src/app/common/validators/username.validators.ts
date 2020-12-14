import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if((control.value as string).includes(" "))
            return {
                cannotContainSpace: true
            }
            return null;
    }

    static unique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            if(control.value === 'chahat')
                resolve({ unique: true });
            else resolve(null);

        }, 2000);
    });
    }

    static validatePassword(control: AbstractControl):Promise<ValidationErrors | null> {
        return new Promise((resolve,reject)=> {
            setTimeout(()=> {
                if(control.value !== '1234')
                    resolve({validatePassword: true});
                else resolve(null);
            },1000);
        })
    }

    static confirmPassword(control: AbstractControl): ValidationErrors| null {
        if(control.get("newPassword").value !== control.get("confirmPassword").value )
           return { confirmPassword: true };
        return null;
    }
}