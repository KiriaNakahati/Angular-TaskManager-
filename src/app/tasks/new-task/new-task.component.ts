import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../taks/task.model';
import { TaskService } from '../tasks.service';


@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTask {

@Input({required: true}) userId!: string;
@Output() close = new EventEmitter<void>();

enteredTitle = '';
enteredSumarry = '';
enteredDate = '';
private tasksService = inject(TaskService)

onCancel(){
    this.close.emit();
}
onSubmit()
{
  this.tasksService.addTask({
    title: this.enteredTitle,
    summary: this.enteredSumarry,
    date: this.enteredDate
  }, this.userId)

  this.close.emit();
}

}