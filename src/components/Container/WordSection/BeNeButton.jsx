import { useRef, useState } from "react"

export default function BeNeButton({btnText ,onClickBtn,id}){
    return(
    	<>
            <button
            className={`bg-gray-700 hover:bg-gray-800 transition-colors text-white font-bold py-2 px-4 rounded
             botton-0 active:bg-gray-300 active:text-gray-800`}  
             onClick={()=>{ onClickBtn(btnText,id) }}
            >
            {btnText}
            </button>
        </>
    )
}