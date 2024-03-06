import koinx_logo from '../assets/koinx-logo.jpeg';
import Navlink from './Navlink';

const Topbar = () => {
    return <div className="flex px-16 py-10 justify-between bg-white shadow-sm">
        <div className='flex items-center'>
            <img src={koinx_logo} className="h-6 w-20" />
        </div>
        <div className='flex gap-9 items-center'>
            <Navlink text={'Crypto Taxes'} />
            <Navlink text={'Free Tools'} />
            <Navlink text={'Resource Center'} />
            <div className='flex items-center bg-blue-600 rounded-lg w-auto px-6 py-2 text-white text-lg font-semibold'>
                Get Started
            </div>
        </div>
    </div>
}

export default Topbar;