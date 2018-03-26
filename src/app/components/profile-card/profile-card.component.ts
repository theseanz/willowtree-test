import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
  host: {'(window:keydown)' : 'hotKeys($event)'}
})
export class ProfileCardComponent implements OnInit, OnDestroy{
  @Input() profile: any;
  @Input() index: number;
  @Input() showName: boolean;
  @Input() correctName: string;
  @Output() sendName: EventEmitter<string> = new EventEmitter<string>();
  private name: string;
  private isCorrect: boolean;

  constructor() {
  }

  ngOnInit() {
    this.name = `${this.profile.firstName} ${this.profile.lastName}`;
    this.isCorrect = (this.name === this.correctName);
  }

  hotKeys(event) {
    if(parseInt(event.key) === (this.index+1)) {
      this.profileClicked();
    }
  }

  profileClicked() {
    if (!this.showName) this.sendName.emit(this.name);
  }

}
