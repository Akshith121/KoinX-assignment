import Chart from '../assets/chart.png'

const Tokenomics = () => {
    return <div className="flex flex-col gap-6">
        <p className="text-2xl font-bold">Tokenomics</p>
        <p className="text-xl font-bold">Initial Distribution</p>
        <div className="flex gap-6 items-center">
            <img className='h-52 w-52' src={Chart} alt="pie-chart" />
            <div className='flex flex-col'>
                <div className='flex items-center gap-2'>
                    <div className='bg-blueshade h-3 w-3 rounded-full'>
                    </div>
                    <p className='text-lg font-medium text-zinc-700'>Crowdsale Investors: 80%</p>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='bg-yellowshade h-3 w-3 rounded-full'>
                    </div>
                    <p className='text-lg font-medium text-zinc-700'>Foundation: 20%</p>
                </div>
            </div>
        </div>
        <p className='font-medium text-lg text-zinc-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet massa vitae tortor condimentum lacinia quis. Praesent semper feugiat nibh sed pulvinar proin. Non pulvinar neque laoreet suspendisse interdum. Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Nec dui nunc mattis enim ut tellus. Fermentum iaculis eu non diam phasellus. Magnis dis parturient montes nascetur ridiculus. Aliquam ultrices sagittis orci a.</p>
    </div>
}

export default Tokenomics;