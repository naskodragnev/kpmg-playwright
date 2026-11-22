// Write a TestDataFactory class with a method validRequest(overrides?) that returns a fresh object each time, using spread for the overrides
// I have no idea what im doing. Not sure i understand what need to be done here. Anyway i did this:

class TestDataFactory {
  constructor(public id: number, public title: string, public priority: number) {}

  test(): string {
    return `Id: ${this.id}, Title: ${this.title}, Priority: &{this.priority}`;
  }
}

const instanceOfRequest = new TestDataFactory(1, 'title', 2);
const validRequest = {...instanceOfRequest, priority: 9};
console.log(validRequest);