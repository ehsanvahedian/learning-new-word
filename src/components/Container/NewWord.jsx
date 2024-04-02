import { useState } from "react";
import WordSection from "./WordSection";

export default function NewWord(){
    const words = ["schreiben" ,"arbeiten" , "brief" , "glüchlich" ];
    const [ word , setWord ] = useState([words[0] , 0]);
    const onClickSetWordHandler = (beNe , id) => {
        if (beNe == "next" && id < words.length-1) 
            setWord([words[id+1] , id+1]);
         else if (beNe == "next" && id >= words.length-1)
            setWord([words[0] , 0]);
         else if (beNe == "before" && id === 0)
            setWord([words[words.length-1] , words.length-1]);
         else if (beNe == "before" && id > 0)
            setWord([words[id-1] , id-1]);
    }
    return(
    	<>
            <WordSection onClick={onClickSetWordHandler} word={word}/>
        </>
    )
}