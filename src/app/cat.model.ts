export class Cat {
  currentScenarioKey: string = "0";
  constructor(public captiveName: string, public chosenName: string, public humanTrust: number, public strength: number, public intelligence: number, public imageURL: string) {}

updateStats(numberArray: number[]){
  this.humanTrust += numberArray[0];
  this.strength += numberArray[1];
  this.intelligence += numberArray[2];
  this.currentScenarioKey = (parseInt(this.currentScenarioKey) + 1).toString();
}

}
