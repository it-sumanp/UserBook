import { Component, OnInit, Input, OnChanges, SimpleChange, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.css']
})
export class UserBoxComponent implements OnInit, OnChanges {

  @Input('users') users: Array<any>;
  @Input('isOpen') isOpen: boolean;
  @Input('searchTerm') searchTerm: string;
  @Input() keyValue: EventEmitter<string>;

  activeEleIndex = -1;
  isMouseActive = false;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e) {
    this.isMouseActive = true;
  }

  constructor() { }

  ngOnInit() {
    if (this.keyValue) {
      this.keyValue.subscribe(data => {
        this.isMouseActive = false;
        if (data === 'up') {
          this.activeEleIndex = this.activeEleIndex === 0 ? this.users.length - 1 : this.activeEleIndex - 1;
        } else if (data === 'down') {
          this.activeEleIndex = this.activeEleIndex === this.users.length - 1 ? 0 : this.activeEleIndex + 1;
        }
        this.scrollToListItem(this.activeEleIndex);
      });
    }
  }

  ngOnChanges(changes: { [activeEleIndex: string]: SimpleChange }) {
    if (changes['activeEleIndex'] && this.activeEleIndex) {
      // console.log('changes index to this.activeEleIndex', this.activeEleIndex);
      // console.log('changes index to changes', changes['activeEleIndex'].currentValue);
      this.scrollToListItem(this.activeEleIndex);
    }
  }

  onInfocus(index: number) {
    console.log('mouse on focus..', index);
    if (this.isMouseActive) {
      this.activeEleIndex = index;
      this.scrollToListItem(index);
    }
  }

  scrollToListItem(index) {
    const item = '#item-' + index;
    const ele = document.querySelector(item);
    if (ele) {
      ele.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

}
