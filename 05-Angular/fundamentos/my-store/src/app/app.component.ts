import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'kenny';
  age: number = 24
  img = 'https://images.unsplash.com/photo-1677714548607-61fa754cdd2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3ODY1OTI5Mw&ixlib=rb-4.0.3&q=80&w=1080'
  btnDisabled = true
  textValue = 'textooooo'
  person = {
    name: 'kenny',
    age: 24,
    img: 'https://images.unsplash.com/photo-1677714548607-61fa754cdd2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3ODY1OTI5Mw&ixlib=rb-4.0.3&q=80&w=1080'
  }

  toggleButton(){
    this.btnDisabled = !this.btnDisabled
  }

  incrementAge(){
    this.person.age += 1
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement
    console.log(element.scrollTop)

  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement
    this.person.name =  element.value
  }
}
