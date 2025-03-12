import { Component,EventEmitter,Input,Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TasksService} from '../task.service';

interface Task{
  id:string;
  userId:string;
  title:string;
  summary:string;
  dueDate:string
}
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  constructor(private taskService: TasksService){
  }
@Input({required:true}) task!:Task
@Output() complete = new EventEmitter<string>() 
OnCompleteTask(){
  this.taskService.removeTask(this.task.id)
 
  // this.complete.emit(this.task.id)

}
}
