export class Cat {
  currentScenarioKey: string = "0";
  constructor(public captiveName: string, public chosenName: string, public humanTrust: number, public strength: number, public intelligence: number, public imageURL: string) {}

updateStats(newTrust: number, newStrength: number, newIntelligence: number){
  this.humanTrust += newTrust;
  this.strength += newStrength;
  this.intelligence += newIntelligence;
  this.currentScenarioKey = (parseInt(this.currentScenarioKey) + 1).toString();
}

}
