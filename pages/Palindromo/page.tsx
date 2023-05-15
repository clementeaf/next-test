/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";

export function isPalindromo(word: string): boolean {
  const formattedWord: string = word.replaceAll(" ", "").toLowerCase()
  .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  .replace(/[\W]/g, '');

  for (let i = 0; i < formattedWord.length / 2; i++) {
      if (formattedWord[i] !== formattedWord[formattedWord.length - 1 - i]) {
          return false;
      }
  }
  return true;
};

export default function Palindromo() {
    const [check, setCheck] = useState(false);
    const [word, setWord] = useState({
      word: "",
    });

    let palindromo;
    if (word.word === "") palindromo = "";
    if (word.word != "" && isPalindromo(word.word) === true) palindromo = "Es Palíndromo";
    if (word.word != "" && isPalindromo(word.word) === false) palindromo = "No es Palíndromo";
    
    const handleCheck = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      setCheck(true);
      localStorage.setItem('palindromo', JSON.stringify(word.word));
    };

    const handleClean = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      setWord({word: ""})
    }

  return (
    <div className="flex flex-col">
      <form className="flex flex-col gap-2 bg-white p-4 rounded-xl">
        <label>Write a word to check if it is a palíndromo</label>
        <input 
                id="password"
                className='border-[1px] border-gray-400 rounded-full p-2'
                onChange={(e) => setWord({word: e.target.value,})}
                value={word.word}
            />
        <button 
            onClick={handleCheck}
            className='border-[1px] border-gray-400 p-2 rounded-md hover:rounded-2xl ease-in-out duration-300'
        >
          Comprobar
        </button>
        <button 
            onClick={handleClean}
            className='border-[1px] border-gray-400 p-2 rounded-md hover:rounded-2xl ease-in-out duration-300'
        >
          Reset
        </button>
        {check && palindromo}
      </form>
    </div>
  )
}