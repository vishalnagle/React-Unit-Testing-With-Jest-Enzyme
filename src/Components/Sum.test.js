const sum = require("../Components/Sum");

describe("update home page", () => {
  it("object check",()=>{
    let data=sum(1,2);
    expect(data).toEqual({name:"code"})
  })
});

// describe("update home page",()=>{
//     it("my second test",()=>{
//         expect(sum(1,2)).toBe(3)
//     })

//     it("my third test",()=>{
//         expect(sum(3,2)).toBe(5)
//     })

//     it("my fourth test",()=>{
//         expect(sum(6,2)).toBe(8)
//     })

//     it("my fifth test",()=>{
//         expect(sum(3,3)).toBe(6)
//     })
// })

// test("my first test case",()=>{
//     let data = 10;
//     expect(data).toBe(10)
// })

// it("my second test",()=>{
//     let data = 50;
//     expect(data).toBe(50)

// })
