import { Component } from '@angular/core';
import { LoremIpsum } from 'lorem-ipsum';

interface User{
  firstname: string;
  lastname: string;
  age: number;
}

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent {
  paragraph = new LoremIpsum().generateParagraphs(1);
  paragraphVisible = true;

  userData: User[] = [
  {firstname: "John", lastname:"Doe", age:20},
  {firstname: "Jane", lastname:"Til", age:19},
  {firstname: "Goran", lastname:"Breg", age:24},
  {firstname: "Mark", lastname:"Wal", age:31}
  ];

  toggleParagraph() {
    this.paragraphVisible = !this.paragraphVisible;
  }
}
