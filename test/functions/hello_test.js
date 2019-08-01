let assert = require("assert");
let hello = require("../../src/functions/hello");

describe("hello", function() {
  describe("#hello", function() {
    it("should say hello", function() {
      let result = hello("Jojo");

      assert.equal(result, "Hello Jojo");
    });
  });
});
