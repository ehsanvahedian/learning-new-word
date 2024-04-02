import { useState } from 'react';
import OldWord from './OldWord'
import WordSection from './WordSection';
import BeNeButton from './WordSection/BeNeButton';
export default function ReviewWord(){
    const words = ["schreiben" ,"arbeiten" , "brief" , "glüchlich" ];
    const [ word , setWord ] = useState(null)
    // const [ id , setId ] = useState(null); // when backend connected
    // const onClickSetIdHandler = (element) => {
    //     setId(element)                           // when backend connected
    // }
      const onClickSetIdHandler = (element , key) => {
        setWord([element , key])                        
    }
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
        {
            (word == null)
                ?
                    <div className='grid grid-cols-4 w-full'>
                        {words.map((element , key)=>{
                            return <OldWord onClickSetIdHandler={onClickSetIdHandler} word={element} id={key} key={key}/>
                        })}
                    </div>
                :
                    <WordSection onClick={onClickSetWordHandler} word={word} />
                    
        }
        </>
    )
}