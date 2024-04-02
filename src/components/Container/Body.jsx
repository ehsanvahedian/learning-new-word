import { useState } from "react";
import EnterCard from "./EnterCard";
import NewWord from "./NewWord";
import ReviewWord from "./ReviewWord";

export default function Body(){
    const [ wichWord , setWichWord ] = useState("none");
    return(
        <>
            {
                (wichWord == "none")
                ? 
                <div className="flex justify-evenly py-52 bg-gray-200">
                    <EnterCard onClickFunc={()=>{setWichWord("new")}} cardText={"New Word"} />
                    <EnterCard onClickFunc={()=>{setWichWord("review")}} cardText={"Review Old Word"} />
                </div>
                : (wichWord == "new") 
                ? <NewWord />

                : <ReviewWord />
            }
        </>
    )
}