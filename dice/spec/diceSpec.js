let diceTester = new DiceTester();
let dice = new DiceFactory(6);
describe("DiceFactory", function(){
  it("should generate a random number between 1 and 6",function(){
    expect(dice.makeDie(6)).toBeLessThanOrEqual(6)
  })

})

describe("DiceTester", function(){
  it("should return true if the die is fair and false if die is not fair",function(){
    expect(diceTester.testDie(dice)).toBeFalsy||toBeTruthy()
  })
  
})
