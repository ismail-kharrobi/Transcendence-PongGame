import  VsBot from './assets/VsBot.svg'
import vsUser from './assets/VsUser.svg'
import { useSocketStore } from '../Chat/Services/SocketsServices'
import toast from 'react-hot-toast'
export const Play = () => {
    const socketStore = useSocketStore();
    const subscribeToGame = async() => {
        // socketStore.socket.emit
        try {
            socketStore.socket.emit("startGame");
            toast.success("Match making in Progress you can move until find opponent"
            ,{
                duration:5000
            })
        } catch (error) {
            toast.error("can not start game")          
        }
    }
    return(
        <>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 sm:gap-2  sm:justify-center sm:items-start p-10 gap-x-20">
            <div onClick={subscribeToGame} className='max-w-[55vw] max-h-[55vh]  w-[100%]'><img src={vsUser} alt="" /></div>
           
            <div onClick={subscribeToGame} className='max-w-[55vw] max-h-[55vh]  w-[100%]'><img src={VsBot} alt="" /></div>
           </div>
        </>
    )
}