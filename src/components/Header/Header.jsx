import MenuBt from "./MenuBt";
import Text from "./Text";
export default function Header({HeadText}){
    return(
        <header className="bg-stone-300 flex justify-center flex-no-wrap relative h-1/4">
            <MenuBt />
            <Text Text={HeadText}/>
        </header>
        )
}