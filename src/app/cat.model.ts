export class Cat {
  constructor(public captiveName: string, public chosenName: string, public humanTrust: number, public strength: number, public intelligence: number, public imageURL: string) {}

updateStats(newTrust: number, newStrength: number, newIntelligence: number){
  this.humanTrust += newTrust;
  this.strength += newStrength;
  this.intelligence += newIntelligence;
}

}
