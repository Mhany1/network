import { Pipe, PipeTransform } from '@angular/core';
import { of } from 'rxjs';
import { Iemployee } from '../models/employee';

@Pipe({
  name: 'filterEmployee'
})
export class FilterEmployeePipe implements PipeTransform {


  transform(value: any[], filterationOptions: any): any {


    let filteredEmployees = []

    if (Object.values(filterationOptions).every(value => value == '')) return value
    else {

      for (const key in filterationOptions) {
        if (filterationOptions[key] !== "") {
          filteredEmployees = value.filter(employee => {
            return filterationOptions[key] == employee[key]
          })
          console.log(filteredEmployees);

        }

      }

      return filteredEmployees




    }

  }


}
