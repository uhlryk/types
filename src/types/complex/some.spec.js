/* eslint-disable no-new-wrappers */
import someType from "./some";
import types from "../../index";
describe("SOME type", () => {
    it("throws error for undefined types list", () => {
        expect(() => someType()).to.throw("Only Non zero length array of types is accepted");
    });

    it("throws error for empty type list", () => {
        expect(() => someType(undefined, [])).to.throw("Only Non zero length array of types is accepted");
    });

    it("throws error for list with wrong types", () => {
        expect(() => someType(undefined, [{}])).to.throw("Only Non zero length array of types is accepted");
    });

    it("returns true for compared correct string with string type", () => {
        expect(someType("test", [types.STRING])).to.be.true();
    });

    it("returns true for compared string to array of STRING type and OBJECT type", () => {
        expect(someType("test", [types.STRING, types.OBJECT])).to.be.true();
        expect(someType("test", [types.OBJECT, types.STRING])).to.be.true();
    });

    it("returns false for value not match by any type in array", () => {
        expect(someType(12345, [types.STRING, types.OBJECT])).to.be.false();
    });
});
