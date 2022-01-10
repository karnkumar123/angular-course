export class SharedServiceService {
  myName: string;
  constructor() { }

  setName(name: string): void{
    this.myName = name;
  }
  getName(): string{
    return this.myName;
  }
}


