/* eslint-disable react-hooks/exhaustive-deps */
import { JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactFragment, ReactPortal, useState } from "react";

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
      let result: { tested:  string, result: boolean} = {
        tested: word.word,
        result: isPalindromo(word.word),
      }
      const value = typeof window !== 'undefined' ? localStorage.getItem('palindromo') : null;
      const listStore = value  && JSON.parse(value);
      if(listStore){
        listStore.push(result);
        localStorage.setItem('palindromo', JSON.stringify(listStore));
      } else {
        localStorage.setItem('palindromo', JSON.stringify([result]));
      }
    };

    const handleClean = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      setWord({word: ""})
    }

    const value = typeof window !== 'undefined' ? localStorage.getItem('palindromo') : null;
    const listStore = value  && JSON.parse(value);

    const DICT: { true:  string, false: string} = {
      true: "Verdadero",
      false: "Falso",
    };

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

            <select>
            {listStore && listStore.map((test: any, idx: number) => {
              const { tested, result } = test;
              return (
              <option value={tested} key={idx}>
                Testeado: {tested}{" "},
                Resultado: {result ? DICT["true"] : DICT["false"]}
              </option>
              )
            })}
            </select>
        {check && palindromo}
      </form>
    </div>
  )
}