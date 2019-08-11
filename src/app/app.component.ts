import { Component, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import data from './data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('searchBox') searchBox: ElementRef;
  keyPressValue: EventEmitter<string> = new EventEmitter();

  title = 'app';
  users: Array<any> = data;
  searchText = '';
  foundUsers: Array<any> = [];

  search(searchText) {
    this.searchText = searchText.toLowerCase();
    this.foundUsers = [];
    if (!!this.searchText) {
      this.foundUsers = this.users.filter(user => user.id.toLowerCase().includes(this.searchText));

      this.foundUsers.push(
        ...this.users.filter(user => user.name.toLowerCase().includes(this.searchText))
          .filter(user => !this.foundUsers.map(u => u.id).includes(user.id))
      );

      this.foundUsers.push(
        ...this.users.filter(user => user.items.some(item => item.toLowerCase().includes(this.searchText)))
          .filter(user => !this.foundUsers.map(u => u.id).includes(user.id))
      );

      this.foundUsers.push(
        ...this.users.filter(user => user.address.toLowerCase().includes(this.searchText))
          .filter(user => !this.foundUsers.map(u => u.id).includes(user.id))
      );

      this.foundUsers.push(
        ...this.users.filter(user => user.pincode && user.pincode.toLowerCase().includes(this.searchText))
          .filter(user => !this.foundUsers.map(u => u.id).includes(user.id))
      );
    }
  }

  keyPress(event: any) {
    // arrow up	38 // arrow down	40
    if (event.keyCode === 38 || event.keyCode === 40) {
      this.searchBox.nativeElement.focus();
      if (event.keyCode === 38) {
        this.keyPressValue.emit('up');
      } else if (event.keyCode === 40) {
        this.keyPressValue.emit('down');
      }
      event.preventDefault();
    }
  }
}
