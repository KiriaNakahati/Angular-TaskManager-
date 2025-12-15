import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Users } from './user.model';
import { CardComponent } from "../shared/card/card.component";


@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class User {

  @Input({required: true}) selected!: boolean;
  @Input({required: true}) user!: Users;  // recebe valores do componente pai, que nesse caso, é o app.component
  @Output() select = new EventEmitter<string>() //emitir eventos para o componente pai // <string> eu pretendo emitir um valor string 

  get imagePath(){
    return 'assets/user/' + this.user.avatar
  
  }
  onSelectUser(){
    this.select.emit(this.user.id)
  }

}
