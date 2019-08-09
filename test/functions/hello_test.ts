import * as assert from "assert";
import { hello } from "../../src/hello/hello_service";

describe("#hello", function() {
  it("should say hello", function() {
    let result = hello("Jojo");

    assert.equal(result, "Hello Jojo");
  });
});
