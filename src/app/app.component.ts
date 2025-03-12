import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from './dummy-user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app2';

  users=DUMMY_USERS;
  // parentData="u1"

  parentData?:string
  
  get selectedUser(){
    return this.users.find((user)=>user.id===this.parentData)!
  }

  onSelectUser(id:string){
    console.log('selected user with id: '+id)
    this.parentData=id
  }
}
