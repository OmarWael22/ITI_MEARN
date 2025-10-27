// import * as chai from "chai";
// import { assert, expect } from "chai";
// import { capitalizeText, CheckPositivity, createArray, Mult, obj3 } from "../index.js";
// chai.should();

// 1
describe("Test capitalizeText Method", () => {
  it("test string Capitalizing", () => {
    expect(capitalizeText("omar")).to.equal("OMAR");
  });
  it("test return type to me sting", () => {
    expect(capitalizeText("xxx")).to.be.a("string");
  });
  it("test passing a non-string will thorw error", () => {
    expect(() => capitalizeText(15)).to.throw();
  });
  it("test passing two args will thorw error", () => {
    expect(() => capitalizeText("omar", "ahmed")).to.throw();
  });
  it("test passing no args will thorw error", () => {
    expect(() => capitalizeText()).to.throw();
  });
});


// 2
describe("Test createArray Method", () => {
  it("test return type to be array", () => {
    expect(createArray(5)).to.be.an.instanceof(Array);
    assert.isArray(createArray(5));
  });
  it("test return length and included elements", () => {
    expect(createArray(3)).has.lengthOf(3).to.includes(1);
  });
  it("test passing a non-number will thorw error", () => {
      expect(() => createArray("aaa")).to.throw();
      (()=>createArray("aaa")).should.throw()
  });
  it("test passing two args will thorw error", () => {
    expect(() => createArray(10, 15)).to.throw();
  });
  it("test passing no args will thorw error", () => {
    expect(() => createArray()).to.throw();
  });
});

// 3
describe("Object equality tests", () => {
  const obj = { id: 1 };
  const obj1 = { x: obj };
  const obj2 = { x: obj };
  // this will fail
//   it("should check reference equality", () => {
//     expect(obj1).to.equal(obj2);
//     obj1.should.equal(obj2);
//     assert.equal(obj1, obj2);
//   });

  it("should check deep equality", () => {
    expect(obj1).to.deep.equal(obj2);
    obj1.should.deep.equal(obj2);
    assert.deepEqual(obj1, obj2);
  });
});

// 4 


describe("Test CheckPositivity Function", () => {
  it("should return true for positive number (x = 4)", () => {
    expect(CheckPositivity(4)).to.equal(true);
  });

  it("should return false for negative number (x = -1)", () => {
    CheckPositivity(-1).should.be.false;
  });

  it("should return false for zero (x = 0)", () => {
    assert.isFalse(CheckPositivity(0));
  });

  it("should throw TypeError for non-number input", () => {
    expect(() => CheckPositivity("abc")).to.throw();
  });
  it("should throw error when no argument is passed", () => {
    expect(() => CheckPositivity()).to.throw();
  });
  it("should throw error when more than one argument is passed", () => {
    expect(() => CheckPositivity(5, 6)).to.throw();
  });
});


// 5 
describe("Test Mult Function", () => {
  it("should ensure x > 0", () => {
    assert.throws(() => Mult(0), Error, "x must be greater than 0");
    assert.throws(() => Mult(-3), Error, "x must be greater than 0");
  });

  it("should return a number greater than 0", () => {
    const result = Mult(5);
    assert.isAbove(result, 0, "result should be above zero");
  });

  it("should double the value correctly", () => {
    
    assert.equal(Mult(4), 8, "4 * 2 should equal 8");
  });
    it("should throw error when no argument is passed", () => {
        assert.throw(() => Mult());
    });
});

// 6
describe("Test Obj3 Nesting", () => {
    it("obj3 should inlude { x: 1 }  at obj.'a.b[0]'  ", () => {
        
        assert.deepNestedInclude(obj3, { "a.b[0]": { x: 1 } });
    });
    it("should not include { x: 2 } at obj3.a.b[0]", () => {
      assert.notDeepNestedInclude(obj3, { "a.b[0]": { x: 2 } });
    });

});