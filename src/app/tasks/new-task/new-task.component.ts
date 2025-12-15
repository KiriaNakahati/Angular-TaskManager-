import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../taks/task.model';


@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTask {

@Output() cancel = new EventEmitter<void>();
@Output() add = new EventEmitter<NewTaskData>();

enteredTitle = '';
enteredSumarry = '';
enteredDate = '';

onCancel(){
    this.cancel.emit();
}
onSubmit()
{
  this.add.emit({
    title: this.enteredTitle,
    summary: this.enteredSumarry,
    date: this.enteredDate,
  })
}

}