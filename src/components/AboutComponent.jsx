import Profit from '../assets/profits.png';
import tax from '../assets/tax.png';
import Rule from "./Rule";
import Arrow from "./Arrow";

const AboutComponent = () => {
    return <div className="flex flex-col">
        <p className="text-2xl font-bold">About Bitcoin</p>
        <p className="text-xl font-bold">What is Bitcoin?</p>
        <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <Rule />
        <p>Lorem ipsum dolor sit amet</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed tempus urna et pharetra. Quis viverra nibh cras pulvinar mattis. Quam viverra orci sagittis eu volutpat odio. Magna sit amet purus gravida quis. Natoque penatibus et magnis dis parturient montes. Sed viverra tellus in hac. Sit amet porttitor eget dolor morbi non. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Ullamcorper eget nulla facilisi etiam dignissim diam. Sit amet volutpat consequat mauris nunc congue.</p>
        <p>Risus nec feugiat in fermentum posuere. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Mauris sit amet massa vitae. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Condimentum mattis pellentesque id nibh tortor. Sed odio morbi quis commodo odio aenean sed adipiscing diam. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Volutpat blandit aliquam etiam erat velit scelerisque. Iaculis eu non diam phasellus vestibulum lorem sed. Egestas diam in arcu cursus euismod quis. Elit sed vulputate mi sit amet mauris commodo. Varius sit amet mattis vulputate. Amet consectetur adipiscing elit pellentesque habitant morbi. Suspendisse interdum consectetur libero id faucibus. Viverra suspendisse potenti nullam ac tortor vitae. Bibendum arcu vitae elementum curabitur vitae nunc sed velit.</p>
        <p>Tortor at auctor urna nunc id. Ultrices mi tempus imperdiet nulla malesuada. Tempor id eu nisl nunc mi ipsum faucibus vitae. Tempus urna et pharetra pharetra. Justo laoreet sit amet cursus. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Dignissim enim sit amet venenatis urna cursus eget. Porttitor eget dolor morbi non. Tristique senectus et netus et malesuada fames ac turpis. In hac habitasse platea dictumst quisque.</p>
        <Rule />
        <p className='font-semibold text-lg'>Already holding Bitcoin?</p>
        <div className="flex gap-6">
            <div className='flex bg-gradient-to-br from-seagreen to-navyblue rounded-md p-4 gap-6 max-w-96'>
                <img src={Profit} className="rounded-md h-32 w-32" />
                <div className='flex flex-col justify-around'>
                    <p className="text-white font-bold text-xl">Calculate your profits</p>
                    <div className="flex justify-center items-center p-1 gap-1 bg-white w-36 rounded-md">
                        <p className='font-semibold'>Check Now</p>
                        <Arrow />
                    </div>
                </div>
            </div>
            <div className='flex bg-gradient-to-br from-crimson to-redshade rounded-md p-4 gap-6 max-w-96'>
                <img src={tax} className="rounded-md h-32 w-32" />
                <div className='flex flex-col justify-around'>
                    <p className="text-white font-bold text-xl">Calculate your tax liabilities</p>
                    <div className="flex justify-center items-center p-1 gap-1 bg-white w-36 rounded-md">
                        <p className='font-semibold'>Check Now</p>
                        <Arrow />
                    </div>
                </div>
            </div>
        </div>
        <Rule />
        <p className="">Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Dictum varius duis at consectetur lorem donec massa. Leo vel fringilla est ullamcorper. Elementum curabitur vitae nunc sed velit. Volutpat consequat mauris nunc congue nisi vitae.</p>
    </div>
}

export default AboutComponent;