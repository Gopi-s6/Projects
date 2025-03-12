import { Component,Input,OnInit } from '@angular/core';
import { TasksService} from './task.service';

@Component({
  selector: 'app-taskcomponent',
  templateUrl: './taskcomponent.component.html',
  styleUrls: ['./taskcomponent.component.css']
})
export class TaskcomponentComponent {

  // private taskService:TasksService
  // private taskService = new TasksService();

  constructor(private taskService: TasksService){
    // this.taskService=taskService
  }
    @Input({required:true}) userId!:string  
    @Input({required:true}) parentData!:string
  
    isAddingTask=false;

get selectedUserTask(){
  return this.taskService.getUserTasks(this.userId)
}



OnStartAddTask(){
this.isAddingTask=true
}

response(value:boolean){
this.isAddingTask=value;
}

// onAddTask(taskData:{title:string; summary:string;date:string}){

// this.isAddingTask=false

// }
}
