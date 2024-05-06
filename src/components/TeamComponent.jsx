import John from '../assets/john.png';
import John2 from '../assets/john2.png';
import Elina from '../assets/elina.png';
import MemberCard from './MemberCard';

const TeamComponent = () => {
    const team = [
        {
            img: John,
            name: "John Smith",
            designation: "Technical Manager",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum sed arcu non odio euismod lacinia. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Duis at consectetur lorem donec massa sapien faucibus. Tellus orci ac auctor augue mauris augue neque gravida. Est ullamcorper eget nulla facilisi." 
        },
        {
            img: Elina,
            name: "Elina Williams",
            designation: "Team Lead (Design)",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum sed arcu non odio euismod lacinia. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Duis at consectetur lorem donec massa sapien faucibus. Tellus orci ac auctor augue mauris augue neque gravida. Est ullamcorper eget nulla facilisi." 
        },
        {
            img: John2,
            name: "John Smith",
            designation: "Software Engineer",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum sed arcu non odio euismod lacinia. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Duis at consectetur lorem donec massa sapien faucibus. Tellus orci ac auctor augue mauris augue neque gravida. Est ullamcorper eget nulla facilisi." 
        }
    ]
    return <div className="flex flex-col gap-6">
       <p className="text-3xl font-semibold">Team</p>
       <p className='font-medium text-slate-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident. Sunt in culpa qui officia deserunt.</p>
       {team.map((member) => {
         return <MemberCard img={member.img} name={member.name} designation={member.designation} about={member.about}/>
       })}
    </div>
}

export default TeamComponent;