
import profile from '../../images/DSC_0061 (1) (1).jpg'

const Calculations = ({ calculation, breakTime, handleBreak }) => {

    let totalTime = 0;


    for (const exercise of calculation) {
        totalTime += exercise.time;
    }

    return (
        <div>
            <div className='w-5/6 mx-auto my-10'>
                <div className='flex'>
                    <div className='w-16 mr-5'>
                        <img className='rounded-full' src={profile} alt="" />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='font-semibold'>Rahat</h1>
                        <p className=' text-slate-600'>Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div className='bg bg-sky-200 flex justify-evenly rounded-lg my-5 py-3'>
                    <div>
                        <h1 className='font-bold text-2xl'>75<span className='font font-normal text-sm'>kg</span></h1>
                        <p>Weight</p>
                    </div>
                    <div>
                        <h1 className='font-bold text-2xl'>6.5</h1>
                        <p>Height</p>
                    </div>
                    <div>
                        <h1 className='font-bold text-2xl'>25<span className='font font-normal text-sm'>yrs</span></h1>
                        <p>Age</p>
                    </div>
                </div>
                <h1 className='text-2xl'>Add A Break</h1>
                <div className='bg bg-sky-200 flex justify-evenly py-3 my-5 rounded-lg'>
                    <button onClick={() => handleBreak(10)} className='bg-slate-50 rounded-full p-3'>10</button>
                    <button onClick={() => handleBreak(20)} className='bg-slate-50 rounded-full p-3'>20</button>
                    <button onClick={() => handleBreak(30)} className='bg-slate-50 rounded-full p-3'>30</button>
                    <button onClick={() => handleBreak(40)} className='bg-slate-50 rounded-full p-3'>40</button>
                    <button onClick={() => handleBreak(50)} className='bg-slate-50 rounded-full p-3'>50</button>
                </div>
                <h1 className='text-2xl '>Exercise Details</h1>
                <div className='bg bg-sky-200 flex items-center px-3 py-3 my-5 rounded-lg'>
                    <h1 className='font-semibold pr-5 text-xl'>Exercise Time:</h1>
                    <p className='font-semibold text-slate-500'>{totalTime} <span>seconds</span></p>
                </div>
                <div className='bg bg-sky-200 flex items-center px-3 py-3 my-5 rounded-lg'>
                    <h1 className='font-semibold pr-5 text-xl'>Break Time:</h1>
                    <p className='font-semibold text-slate-500'>{breakTime} <span>seconds</span></p>
                </div>
            </div>
        </div>
    );
};

export default Calculations;