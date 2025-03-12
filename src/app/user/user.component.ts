import { Component,computed,signal,Input,Output, EventEmitter } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';

import { DUMMY_USERS } from '../dummy-user';


const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  // selectedUser = signal(DUMMY_USERS[randomIndex]);

  // // USING SIGNAL 
  // imagePath = computed(() => 'assets/users/'+this.selectedUser().avatar)

  // // this below will not work if we using signal
  // // get imagePath(){
  // //   return 'assets/users/'+this.selectedUser.avatar;
  // // }

  // onSelectUser(){
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
  //   this.selectedUser.set(DUMMY_USERS[randomIndex])
  // }
  @Input({required:true}) id!:string;
  @Input({required:true}) avatar!:string;
  @Input({required:true}) name!:string;
  @Input({required:true}) selected!:boolean
  @Output() select = new EventEmitter();

  get imagePath(){
    return 'assets/users/'+this.avatar;
  }
    onSelectUser(){
      this.select.emit(this.id)
  }
}
