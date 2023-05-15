import { isPalindromo } from "./page";

const valid = ["ana", "omo"]
const invalid = ["telmo", "palabra", "paindromo"];

describe("isPalindromo", () => {
    it.each(valid)(`%s shoud be valid`, (word) => {
        expect(isPalindromo(word)).toBeTruthy();
    })

    it.each(invalid)(`%s shoud be invalid`, (word) => {
        expect(isPalindromo(word)).toBeFalsy();
    })
})