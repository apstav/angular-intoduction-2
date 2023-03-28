import { Component } from '@angular/core';

export interface User{
  firstname: string;
  lastname: string;
  age: number;
}

@Component({
  selector: 'app-component-input-output',
  templateUrl: './component-input-output.component.html',
  styleUrls: ['./component-input-output.component.css']
})
export class ComponentInputOutputComponent {
  userData: User[] = [
    {firstname: "John", lastname:"Doe", age:20},
    {firstname: "Jane", lastname:"Til", age:31},
    {firstname: "Goran", lastname:"Breg", age:24},
    {firstname: "Mark", lastname:"Wal", age:31},
    {firstname: "Armando", lastname:"Edmond", age:33}
    ];

    onDeleteUser(index:number) {
      console.log(index);
      this.userData.splice(index, 1);
    }
}
