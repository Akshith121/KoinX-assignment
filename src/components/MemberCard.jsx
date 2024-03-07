
const MemberCard = ({ img, name, designation, about }) => {
    return <div className="flex bg-sky-100 px-6 py-2 gap-6 rounded-md">
        <div className="flex flex-col gap-3">
            <img src={img} className="h-28 w-24 rounded-md" />
            <div className="flex flex-col gap-1 justify-center items-center">
                <p className="text-md font-semibold">{name}</p>
                <p className="text-sm text-slate-500">{designation}</p>
            </div>
        </div>
        <div className="flex-1 flex items-center">
            <p>{about}</p>
        </div>
    </div>
}

export default MemberCard;