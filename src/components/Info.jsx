
const Info = ({text}) => {
    return <div className="flex gap-2 items-center">
    <p className="font-bold text-xl text-slate-700">{text}</p>
    <svg xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
    </svg>
</div>
}

export default Info;