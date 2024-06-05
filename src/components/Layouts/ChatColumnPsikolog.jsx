import { CircleCheck  } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Column from './Column';

const ChatColumnPsikolog = () => {
    return (
        <div className="flex flex-col h-screen bg-gray-100">
          <header className="bg-teal-500 text-white p-4 flex justify-between items-center">
            <div className='flex flex-row items-center gap-5'>
              <Link to="/chat-user"><ChevronLeft color='#fff' /></Link>
              <div className="text-lg md:text-xl font-semibold">P. Yosianudin</div>
            </div>
            <div className="flex items-center">
              <div className="mr-2">Online</div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </header>
    
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <Column alignment="items-end" nama="P. Yosianudin" pesan="saya punya keluhan" />
            <Column alignment="items-start" nama="Max Verstappen" pesan="kalo boleh tau apa keluhan yang dihadapi" />
            <Column alignment="items-end" nama="P. Yosianudin" pesan="saya merasa akhir akhir ini sering tidak bisa mengontrol emosi" />
          </div>
    
          <div className="p-8 flex bg-slate-200">
            <input type="text" className="flex-1 p-2 border rounded-l-lg focus:outline-none" placeholder="Pesan" />
            <button className="bg-cyan-600 text-white py-2 px-6 rounded-r-lg">Send</button>
            <button className="w-16 h-16 bg-cyan-600 rounded-lg ml-2 flex justify-center items-center">
                <CircleCheck color='#fff' />
            </button>
          </div>
        </div>
      )
    }

export default ChatColumnPsikolog
