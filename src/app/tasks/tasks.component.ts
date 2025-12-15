import { Component, input, Input } from "@angular/core";
import { TaskComponent } from "./taks/task.component";
import { NewTask } from "./new-task/new-task.component";
import { type NewTaskData } from "./taks/task.model";
import { TaskService } from "./tasks.service";

@Component({
    selector: 'app-tasks',
    standalone: true,
    imports: [TaskComponent, NewTask],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
})
export class TasksComponent{
    @Input({required: true}) name!: string;
    @Input({required: true}) userId!: string;
    isAddingTask = false; 
    //dependence injection é quando voce cria apenas uma instancia de uma classe e assim voce pode usa-la em todos os componentes; o angular faz isso sozinho 

    constructor(private tasksService: TaskService ){} // a gente precisa de um objeto do tipo tasksService 

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);  
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }
  
  OnCloseAddTask(){
    this.isAddingTask = false
  }
}