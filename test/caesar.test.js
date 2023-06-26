// Write your tests here!
const {expect} = require("chai"); 
const {caesar} = require("../src/caesar");
/*
describe("Tests for establishing if function is setup correctly.", () => {
    it("The Ceasar function Exists", () => {
        expect(caesar).to.be.a("function"); 
    });

    it("The Ceasar Function should return a string.", () => {
        const actual = caesar("B", 3);
        expect(actual).to.be.a("string"); 
    });
});
*/ 

describe("Tests for the Caesar Function Encoding logic", () => {
    it("The Ceasar Function should return the shifted letter", () => {
        const message = "a";
        const actual = caesar(message, 5); 
        const expected = "f"; 

        expect(actual).to.equal(expected); 
    });

    it("The Caesar Function should preserve the spaces of the given message.", () => {
        const message = "Gallifrey Stands";
        const actual = caesar(message, 5);
        const expected = "lfqqnkwjd xyfsix";

        expect(actual).to.equal(expected); 
    });
});

describe("Tests for the Caesar Function Decoding Logic", () => {
    it("The Caesar Function should shift the encrpypted letter to the orginal letter." , () => {
        const message = "f";
        const expected = "a";
        const actual = caesar(message,5,false);
        
        expect(actual).to.equal(expected);
    });

    it("The Caesar Function should shift the encrypted message to the orginal message.", () => {
        const message = "Lfqqnkwjd Xyfsix";
        const expected = "gallifrey stands";
        const actual = caesar(message, 5, false);

        expect(actual).to.equal(expected);
    });
});