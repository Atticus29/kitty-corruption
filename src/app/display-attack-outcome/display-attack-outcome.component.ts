import { Component, OnInit } from '@angular/core';
import {CatService} from '../cat.service';
import { Cat } from '../cat.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-attack-outcome',
  templateUrl: './display-attack-outcome.component.html',
  styleUrls: ['./display-attack-outcome.component.css']
})
export class DisplayAttackOutcomeComponent implements OnInit {
  catToDisplay;
  outcomeTitle = "This shouldn't happen";
  outcomeDescription = "This shouldn't happen either";
  outcomeImage = "https://image.freepik.com/free-icon/question-mark_318-52837.jpg";

  constructor(private catService: CatService, private router: Router) { }

  ngOnInit() {
    this.catToDisplay = this.catService.catChampion;
    this.assessOutcome();
  }

  assessOutcome(){
    let trust = this.catToDisplay.humanTrust;
    let strength = this.catToDisplay.strength;
    let intelligence = this.catToDisplay.intelligence;
    if ( trust<0 || strength<0 || intelligence<0){
      this.outcomeTitle = "Your plans were foiled!";
      this.outcomeDescription = "You weren't ready to do battle with the large monkeys. They bested you, and you have to regroup. Another time, another place. Perhaps in one of your other lives.";
      this.outcomeImage = "http://www.catster.com/wp-content/uploads/2015/06/man-shouts-at-cat.jpg";
    } else if (trust >=10 && strength >=10 && intelligence<10){
      this.outcomeTitle = "Got 'em'!";
      this.outcomeDescription = "You gained their trust and used your overwhelming strength to overcome the human captor! Your act of bravery will spark a global cat rebellion!";
      this.outcomeImage = "http://gif.hol.com/201601/Cat-Drop-Kicks-Kid.gif";
    } else if (trust >=10 && intelligence >=10 && strength<10){
      this.outcomeTitle = "Got 'em'!";
      this.outcomeDescription = "Your superior wit wins the day! Wait until they're comfortable. Be patient. And strike when they least expect. Well done!";
      this.outcomeImage = "http://gif-finder.com/wp-content/uploads/2017/04/Cat-Outsmarts-His-Not-So-Sneaky-Human.gif";
    } else if (trust <10 && intelligence>=10 &&strength>=10){
      this.outcomeTitle = "Got 'em'!";
      this.outcomeDescription = "You don't need them to trust you if you're a bad-ass cat. Strike once, with finality. With wit and strength, you can conquer humans early: nip 'em in the bud!";
      this.outcomeImage = "http://barkpost-assets.s3.amazonaws.com/wp-content/uploads/2013/04/11pmcat.gif";
    } else if(trust>=10 && intelligence>=10 && strength>=10){
      this.outcomeTitle = "Got 'em'!";
      this.outcomeDescription = "You've taken the time to hone your skills. Now, you are the perfect weapon against humanity. Let them cower in fear before your purrrfection!";
      this.outcomeImage = "http://uproxx.files.wordpress.com/2014/03/jurassic-park-with-cats-2.gif?w=650";
    } else{
      this.outcomeTitle = "Your plans were foiled!";
      this.outcomeDescription = "You weren't ready to do battle with the large monkeys. They bested you, and you have to regroup. Another time, another place. Perhaps in one of your other lives.";
      this.outcomeImage = "https://uproxx.files.wordpress.com/2016/01/year-of-the-monkey-cat-costume-3.gif?w=650";
    }
  }

}
