export default function EnterCard({cardText ,onClickFunc}){
    return(
    	<div className="w-1/4 pt-20 pb-1 px-20 inline-block border-4 border rounded-2xl border-gray-400 relative text-center bg-gray-300 hover:bg-gray-400 transition-colors">
            <h3 className="mb-12 text-xl font-bold">{cardText}</h3>
            <button
             className="bg-gray-700 hover:bg-gray-800 transition-colors text-white font-bold py-2 px-4 rounded botton-0 active:bg-gray-300 active:text-gray-800"            
             onClick={onClickFunc}
            >
                Enter
            </button>
        </div>
    )
}