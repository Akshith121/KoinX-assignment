import Image from '../assets/koinx-img.png';
import TrendingCoins from './TrendingCoins';
import Arrow from './Arrow';

const Rightside = () => {

    return <div className="col-span-4">
        <div className="flex flex-col gap-4 items-center px-12 py-8 bg-primary rounded-2xl">
            <p className="text-white font-bold text-2xl">Get Started with KoinX</p>
            <p className="text-white font-semibold text-2xl">for FREE</p>
            <p className="text-white text-md">With out range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p>
            <img className='h-56 w-56' src={Image} alt="Animated image" />
            <div className='flex gap-1 items-center bg-white rounded-md px-6 py-3 text-lg font-bold'>
                <p className=''>Get Started for FREE</p>
                <Arrow />
            </div>
        </div>
        <TrendingCoins />
    </div>
}

export default Rightside;