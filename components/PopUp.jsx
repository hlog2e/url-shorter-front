export default function PopUp({show, title, content, onClose}) {
    if(!show) return null;
    return(<div className="w-72 h-96 bg-white absolute left-[20px] top-[70px] rounded-xl p-4 overflow-scroll drop-shadow-lg">
        <div className={"flex items-center justify-between"}><p className={"font-bold text-xl text-red-500"}>{title}</p><img onClick={onClose} className="w-6 h-6 cursor-pointer" src={"./icons/xmark.svg"}/></div>
        <p className={"font-semibold mt-2 whitespace-pre"}>{content}</p>
    </div>)
}
