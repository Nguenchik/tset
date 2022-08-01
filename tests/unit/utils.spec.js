import { randomNum } from "@/utils";

describe("Utils.js", () => {
  it("Random number between 20 && 80", () => {
    const r = randomNum(20, 80);
    expect(r >= 20 && r <= 80).toBeTruthy();
  });
});
