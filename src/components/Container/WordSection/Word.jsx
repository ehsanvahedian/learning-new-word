export default function Word({word ,audioSrc}){
    return(
    	<div className="flex justify-between py-10">
            <p className="ml-8 text-2xl font-bold text-cyan-950">{word}</p>
            <audio controls className="w-2/12 h-10 mr-5">
                <source src={audioSrc} type="audio/mpeg" />
            </audio>
        </div>
    )
}