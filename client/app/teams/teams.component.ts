import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
  animations: [
    trigger('teamsAnimation', [
      state('active', style({
        opacity: '1',
      })),
      transition('void => *', [
        style({ transform: 'translateY(-100px)', opacity: '0' }),
        animate('1000ms ease-in-out'),
      ]),
    ]),
  ],
})
export class TeamsComponent implements OnInit {
  headerState = 'inactive';
  buttonState = true;
  header = 'devteam';
  titre = 'Gallerie des equipes';
  person = 'Anet';
  teams = [
  { first_name: 'Tatum', last_name: 'Vernon', email: 'tvernon0@lycos.com', gender: 'Female', company: 'Youopia' },
  { first_name: 'Anet', last_name: 'Bellis', email: 'abellis1@cnn.com', gender: 'Female', company: 'Oloo' },
  { first_name: 'Pippa', last_name: 'Goymer', email: 'pgoymer2@ihg.com', gender: 'Female', company: 'Browsecat' },
  { first_name: 'Addison', last_name: 'Lawther', email: 'alawther3@walmart.com', gender: 'Male', company: 'Yoveo' },
  { first_name: 'Anya', last_name: 'Franzman', email: 'afranzman4@bravesites.com', gender: 'Female', company: 'Twitterbeat' }];

  first_name = '';
  last_name = '';
  email = '';
  gender = '';
  company = '';

  addTeam(value: any) {
    this.teams.unshift({
      first_name: value.first_name,
      last_name: value.last_name,
      email: value.email,
      gender: value.gender,
      company: value.company,
    });

    this.first_name = '';
    this.last_name = '';
    this.email = '';
    this.gender = '';
    this.company = '';
  }


  constructor() { }

  ngOnInit() {
  }
  // animateHeader() {
  //   // alert('Button clicked');
  //   // this.buttonState = (this.buttonState ? false : true);
  //   this.headerState = (this.headerState === 'inactive' ? 'active' : 'inactive');
  // }

}
