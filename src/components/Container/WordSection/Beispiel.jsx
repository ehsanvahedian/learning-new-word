import BeispielText from "./beispielText";
import VideoBeispiel from "./VideoBeispiel";
import video from "../../../media/testVideo.mp4";
export default function Beispiel(){
    return(
    	<div className="flex flex-wrap w-screen">
            <div className="w-7/12 mr-20 my-5">
                <BeispielText sentense={"ich arbeite jarden tag"} />
                <BeispielText sentense={"ich arbeite jarden tag"} />
                <BeispielText sentense={"ich arbeite jarden tag"} />
                <BeispielText sentense={"ich arbeite jarden tag"} />
            </div>
            <VideoBeispiel videoSrc={video}/>
        </div>
    )

}