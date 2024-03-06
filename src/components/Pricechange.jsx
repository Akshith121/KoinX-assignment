
const PriceChange = ({usd, background, text_color}) => {
    return <div className={`flex px-1 items-center gap-1 rounded-sm ${background}`}>
    {usd > 0 ? <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
    </svg>
    : <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
     </svg>}
    <p className={`text-lg font-medium ${text_color}`}>{usd.toFixed(2)}%</p>
</div>
}

export default PriceChange;