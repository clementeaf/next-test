import { useEffect } from "react";
import { NextPage } from 'next';
import useClickTracker from "@/hooks/useClickTracker";

const DotsComponent: NextPage = () => {
    // hook para obtención de posicionamiento del click
    const {clicks, setClicks} = useClickTracker();

    // Función para asignamiento aleatorio de color
    const setColor = () => {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        return randomColor;
    };

    // acceso a primera posición y color alamacenado en LocalStorage
    const value = typeof window !== 'undefined' ? localStorage.getItem('firstIndex') : null;

    useEffect(() => {
        document.addEventListener("click", () => {
            setColor();
        });
    });

    const dot = value  && JSON.parse(value);

    
  return (
    <div className="flex flex-1 items-center">
        <button 
            type="button" 
            className='p-2 border-[1px] border-gray-400 rounded-md hover:border-gray-600 hover:rounded-2xl ease-in-out duration-300 bg-white'
            onClick={() => setClicks([])}
        >
          Reset
        </button>
        {clicks.length > 1 ? clicks.map(({ x, y, color }) =>   
        <div key={x + y}
            className="rounded-full" 
            style={{
                height: "20px", 
                width: "20px", 
                position: "absolute", 
                left: x + "px", 
                top: y + "px", 
                backgroundColor: color }} 
        />
        )
        :
        dot &&
        (
            <div key={dot.x + dot.y}
            className="rounded-full" 
            style={{
                height: "20px", 
                width: "20px", 
                position: "absolute", 
                left: dot.x + "px", 
                top: dot.y + "px", 
                backgroundColor: dot.color }} 
        />
        )
    }
    </div>
  )
}

export default DotsComponent;