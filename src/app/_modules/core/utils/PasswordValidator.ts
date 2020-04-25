import {AbstractControl} from "@angular/forms";


export class PasswordValidator {

    /**
     * @description Util method for confirm password field
     */
    static matchPassword(abstractControl: AbstractControl){
        let formGroup = abstractControl.parent;
        if(formGroup){
            let password = formGroup.get('password').value
            let confPassword = formGroup.get('confirmPassword').value

            if(password !== confPassword) {
                return {matchPassword: true}
            }
        }

        return null;
    }
}
