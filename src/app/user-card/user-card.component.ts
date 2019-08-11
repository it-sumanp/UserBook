import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input('user') user: any;
  @Input('index') index: number;
  @Input('isActive') isActive: boolean;

  @Input('searchTerm') searchTerm: string;

  @Output()  infocus = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }
  onHoverListItem(index) {
    this.infocus.emit(index);
  }
}
