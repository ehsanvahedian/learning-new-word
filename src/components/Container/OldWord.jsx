export default function OldWord({word ,onClickSetIdHandler : func ,id}){
    return(
            <button
                className="inline-block text-center w-2/4 py-5 px-6 border-2 border-gray-600 rounded-xl
                font-bold text-3xl bg-indigo-100 text-sky-950 hover:bg-indigo-200
                 hover:text-sky-900 transition-colors my-5 mx-16 cursor-pointer"
                onClick={() => {func(word , id)}}
            >
                <p>{word}</p>
            </button>
    )
}