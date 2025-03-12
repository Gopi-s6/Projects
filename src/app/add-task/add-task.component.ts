import { Component,EventEmitter,Inject,Input,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../taskcomponent/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
@Input({required:true}) userId!:string
@Output() response = new EventEmitter<boolean>()
@Output() add = new EventEmitter<{title:string; summary:string;date:string }>()
enteredTitle=""
enteredSummary=""
enteredDueDate=""


// private taskService=Inject(TasksService)
  constructor(private taskService: TasksService){}


  close(){
    this.response.emit(false)
  }

  onSubmit(){
    this.taskService.addTask({
        title:this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDueDate
    },this.userId)


    this.response.emit(false)


    // this.add.emit({
    //   title:this.enteredTitle,
    //   summary:this.enteredSummary,
    //   date:this.enteredDueDate
    // })
  }
}
