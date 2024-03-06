import Image from '../assets/koinx-img.png';

const Rightside = () => {
    return <div className="col-span-4">
        <div className="flex flex-col gap-4 items-center px-12 py-8 bg-primary rounded-2xl">
            <p className="text-white font-bold text-2xl">Get Started with KoinX</p>
            <p className="text-white font-semibold text-2xl">for FREE</p>
            <p className="text-white text-md">With out range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p>
            <img className='h-56 w-56' src={Image} alt="Animated image" />
            <div className='flex gap-1 items-center bg-white rounded-md px-6 py-3 text-lg font-bold'>
                <p className=''>Get Started for FREE</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            </div>
        </div>
    </div>
}

export default Rightside;