export default function VideoBeispiel({videoSrc}){
    return(
    	<div className="w-4/12 h-auto inline-block my-10">
            <video  
            className="w-full"
            controls
            >
                <source src={videoSrc} type="video/mp4" />
                your browser doesn't support this video !!!
            </video>
        </div>
    )

}