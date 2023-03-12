import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  name = 'kenny';
  age = '24'
  img = 'https://images.unsplash.com/photo-1677714548607-61fa754cdd2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3ODY1OTI5Mw&ixlib=rb-4.0.3&q=80&w=1080'
  btnDisabled = true
  textValue = 'textooooo'
}
