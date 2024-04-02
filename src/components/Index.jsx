import Body from "./Container/Body";
import Header from "./Header/Header";

export default function Index(){
    return(
    	<div className="bg-gray-200">
            <Header HeadText={"lernen Deutsch Word"}/>
            <Body />
        </div>
    )
}