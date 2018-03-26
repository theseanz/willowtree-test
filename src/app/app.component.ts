import {Component, OnInit} from '@angular/core';
import {WtapiService} from './services/wtapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {'(window:keydown)' : 'hotKeys($event)'}
})
export class AppComponent implements OnInit {
  private allProfiles: any;
  public numRight: number;
  public numWrong: number;
  public fiveProfiles: any;
  public correctName: string;
  public selectedName: string;
  public answered: boolean;
  public resetting: boolean;

  constructor(private _wtapiService: WtapiService) {
    this.numRight = 0;
    this.numWrong = 0;
  }

  ngOnInit() {
    this.getProfiles();
    this.resetting = false;
  }

  hotKeys(event) {
    if (event.key === 'p' || event.key === 'P') {
      this.playStandardNameGame();
    }

    if (event.key === 'm' || event.key === 'M') {
      this.playMattNameGame();
    }
  }

  getProfiles() {
    this._wtapiService.getTeamMembers().subscribe(
      data => {
        this.allProfiles = data;
      },
      err => console.log(err),
      () => this.playStandardNameGame()
    );
  }

  playStandardNameGame() {
    this.answered = false;
    this.resetting = true;
    this.getFiveProfiles(this.allProfiles);
  }

  playMattNameGame(){
    this.answered = false;
    this.resetting = true;
    this.getMattProfiles();
  }

  getMattProfiles(){
    const mattProfiles = this.allProfiles.filter((item) => {return item.firstName.startsWith('Mat')});
    this.getFiveProfiles(mattProfiles);
  }

  getFiveProfiles(profileList) {
    /*
    If the components are not given time to be destroyed, they will be re-used, which results in the wrong person with a checkbox.
    This was particularly noticeable on the Matt version since there were limited options.
     */
    setTimeout(function () {
      this.fiveProfiles = [];
      const shuffledProfiles = profileList.sort(() => .5 - Math.random());
      this.fiveProfiles = shuffledProfiles.slice(0, 5);
      const randomNumber = Math.floor(Math.random() * 5);
      this.correctName = `${this.fiveProfiles[randomNumber].firstName} ${this.fiveProfiles[randomNumber].lastName}`;
      this.resetting = false;
    }.bind(this), 100);
  }

  checkName(name) {
    this.answered = true;
    this.selectedName = name;
    if (this.selectedName === this.correctName) {
      this.numRight++;
    } else {
      this.numWrong++;
    }
  }

}
