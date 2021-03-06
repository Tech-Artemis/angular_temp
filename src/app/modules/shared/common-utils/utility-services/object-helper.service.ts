import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ObjectHelperService {

    constructor() {
    }

    isNullOrUndefined(value: any): boolean {
        return value === null || value === undefined;
    }

    isNullOrEmpty(value: any): boolean {
        return value === '' || this.isNullOrUndefined(value);
    }

    isEmptyOrZero(value: any): boolean {
        return value === 0 || this.isNullOrEmpty(value)
    }
}
