// Write your tests here!
const {expect} = require("chai");
const {substitution} = require("../src/substitution");

describe("Tests for establishing if the Substitution Function is setup correctly", () => {
    it("The Substitution Function should be a function", () => {
        expect(substitution).to.be.a("function");
    }); 

    it("The Substitution Function should return a string", () => {
        const actual = substitution("A", "plmoknijbuhvygctfxrdzeswaq");
        expect(actual).to.be.a("string");
    });
});

describe("Tests for the Encoding Logic of the Substitution Function", () => {
    it("The Substitution Function should take in the given letter and alphabet and substitute the letter with the position in the alphabet", () => {
        const message = "m";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(message, alphabet);
        const expected = "y";

        expect(actual).to.equal(expected); 
    });

    it("The Substitution Function should take in the given message and alphabet and substitute the message with the postion in the alphabet", () => {
        const message = "How do you want to do this";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(message, alphabet);
        const expected = "jcs oc acz spgd dc oc djbr";
        
        expect(actual).to.equal(expected); 
    });
});

describe("Tests for the Decoding Logic of the Substitution Function", () => {
    it("The Substitution Function should take in a single letter and a given alphabet and substitute it with the plaintext.", () => {
        const message = "Y";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(message, alphabet, false); 
        const expected = "m";

        expect(actual).to.equal(expected); 
    });

    it("The Substitution Function should take in a encrypted message and a given alphabet and substitute it with the plaintext.", () => {
        const message = "jcs oc acz spgd dc oc djbr";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(message, alphabet, false);
        const expected = "how do you want to do this";

        expect(actual).to.equal(expected); 
    });
});