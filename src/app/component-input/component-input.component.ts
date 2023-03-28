import { Component } from '@angular/core';
import { orderBy } from 'lodash-es';

export interface User{
  firstname: string;
  lastname: string;
  age: number;
}

@Component({
  selector: 'app-component-input',
  templateUrl: './component-input.component.html',
  styleUrls: ['./component-input.component.css']
})
export class ComponentInputComponent {

  userData: User[] = [
    {firstname: "John", lastname:"Doe", age:20},
    {firstname: "Jane", lastname:"Til", age:31},
    {firstname: "Goran", lastname:"Breg", age:24},
    {firstname: "Mark", lastname:"Wal", age:31},
    {firstname: "Armando", lastname:"Edmond", age:33}
    ];

    sortByAgeDesc() {
      this.userData = orderBy(this.userData, ['age'], ['desc'])
    }

    sortByAgeAsc() {
      this.userData = orderBy(this.userData, ['age'], ['asc'])
    }

    sortByAgeLastDesc() {
      this.userData = orderBy(this.userData, ['age','lastname'], ['desc', 'desc'])
    }

    init() {
      this.userData = [
        {firstname: "John", lastname:"Doe", age:20},
        {firstname: "Jane", lastname:"Til", age:31},
        {firstname: "Goran", lastname:"Breg", age:24},
        {firstname: "Mark", lastname:"Wal", age:31},
        {firstname: "Armando", lastname:"Edmond", age:33}
        ];
    }
}
