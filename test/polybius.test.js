// Write your tests here!
const {expect} = require("chai"); 
const {polybius} = require("../src/polybius");


describe("Polybius Tests to see if the Function and Result exists/return the correct type.", () => {
    it("Checking to see if polybius is a function", () => {
        expect(polybius).to.deep.equal(polybius);
    });

    it("Polybius Function should return a string", () => {
        const actual = polybius("A");
        expect(actual).to.be.a("string"); 
    });
});

describe("Polybius Tests for the Encryption", () => {
    it("Polybius Function should encrypt a string consisting of a single letter", () => {
        const expected = "21"
        const message = "b";
        const actual = polybius(message);
        expect(actual).to.equal(expected);
    });

    it("Polybius Function should encrypt a string consisting of two letters", () => {
        const message = "Ab"; 
        const expected = "1121";
        const actual = polybius(message);
        expect(actual).to.equal(expected);         
    });

    it("Polybius Function should encrypt a string consisting of two letters and a space", () => {
        const message = "Abc";
        const expected = "112131";
        const actual = polybius(message); 
        expect(actual).to.equal(expected);   
    });

    it("Polybius Function should encrypt a string consisting of a single message", () => {
        const message = "message";
        const expected = "23513434112251";
        const actual = polybius(message);
        expect(actual).to.equal(expected); 
    });


    it("Polybius Function should encrypt a string consisting of a sentance and preserve the spaces", () => {
        const message = "May the Force be with You.";
        const expected = "231145 443251 1243243151 2151 25424432 454354.";
        const actual = polybius(message);
        expect(actual).to.equal(expected); 
    });
});

describe("Tests for Polybuis Decoding Logic", () => {
    it("The Polybuis Function should take the given number and return the letter assossiacted with it", () => {
        const message = "11";
        const expected = "a";
        const actual = polybius(message, false);

        expect(actual).to.equal(expected); 
    });

    it("The Polybuis Function should take the given numbers and return the letter assossiated with it", () => {
        const message = "1112";
        const expected = "af";
        const actual = polybius(message, false);

        expect(actual).to.equal(expected);
    });
});