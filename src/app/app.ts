import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { User } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User, TasksComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-angular-app');
  user = DUMMY_USERS;
  selectedUserId?: string;

  get selectUser(){
    return this.user.find((user) => user.id == this.selectedUserId);
  }

  onSelectUser(id: string){
    this.selectedUserId = id;
  }
}
