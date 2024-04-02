import Beispiel from "./WordSection/Beispiel";
import BeNeButton from "./WordSection/BeNeButton";
import Word from "./WordSection/Word";

export default function WordSection({word ,onClick}){

    return(
    	<div className="bg-gray-200 h-full">
            <Word word={word[0]} audioSrc={""} />
            <Beispiel />
            <div className="flex justify-evenly py-10">
                <BeNeButton onClickBtn={onClick} btnText={"before"} id={word[1]} />
                <BeNeButton onClickBtn={onClick} btnText={"next"} id={word[1]} />
            </div>
        </div>
    )
}