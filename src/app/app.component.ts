import { Component } from '@angular/core';
import { SideBar } from './app.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Introduction';


  sideBarMenu: SideBar[] = [
    {text: 'Greeting', path: 'greeting'},
    {text: 'One way bind', path: 'one-way-bind'},
    {text: 'Event bind', path: 'event-bind'},
    {text: 'Two way bind', path: 'two-way-bind'},
    {text: 'Structural directives', path: 'structural-directives'},
    {text: 'Template variables', path: 'template-variables'},
    {text: 'Component input', path: 'component-input'},
    {text: 'Component input output', path: 'component-input-output'},
    {text: 'Welcome', path:'welcome'}
  ]
}
