import React, { useState } from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight} from "react-icons/fi";


const Testimonials = (props) => {
    let reviews=props.reviews;
    const[index,setIndex] = useState(0); //initially data.js ke review array ke 0th[0] index ko hi show krdo

    function leftShiftHandler(){
        if(index-1 < 0 ){
            setIndex(reviews.length-1);
        }
        else{
            setIndex(index-1);
        }

    }

    function rightShiftHandler(){
        if(index +1 >= reviews.length ){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }

    }

    function surpriseHandler(){
        
        let randomIndex = Math.floor(Math.random() * reviews.length); //Math.random() gives number  either 0 or 1 athen multiplu=y with size of reviews array to get desired swaps
        //also use Math.floor() function because math. random se floating digits bhi aa sakti hai toh floor ki wajah se usko neare integer mein convert krlo
        setIndex(randomIndex);

    }
    return(
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center
        mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md mx-auto">
            <Card review={reviews[index]}></Card>

            <div className="flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto">
                <button onClick={leftShiftHandler}
                className="cursor-pointer hover:text-violet-500">
                    <FiChevronLeft />
                </button>
                <button onClick={rightShiftHandler}
                className="cursor-pointer hover:text-violet-500">
                    <FiChevronRight/>
                </button>
            </div>

            <div className="mt-6">
                <button onClick={surpriseHandler}
                className="bg-violet-400 hover:bg-violet-500 transition-all duration-200
                cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg ">
                   Surprise Me
                </button>
            </div>
        </div>

    )
}

export default Testimonials;