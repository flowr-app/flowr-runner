import * as assert from "assert";
import { echo } from "../../src/functions/echo";

describe("#echo", function() {
  it("should say hello", function() {
    let result = echo("Echo echo echo...");

    assert.equal(result, "Echo echo echo...");
  });
});
