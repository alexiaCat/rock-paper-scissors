import Pentagon from '/images/bg-pentagon.svg';
import Triangle from '/images/bg-triangle.svg';
import Logo from '/images/logo.svg';
import Piedra from '/images/icon-rock.svg';
import Papel from '/images/icon-paper.svg';
import Tijera from '/images/icon-scissors.svg';


function App() {


  return (
    <>
      <div className="font-barlow-semi-condensed text-white flex flex-col items-center">
        <div className="flex py-6 px-7 flex-row justify-between w-[50%] h-[170px]  border-[3px] border-neutral-header-outline rounded-2xl mt-14">
          <img
            src={Logo}
            className='w-[25%]'
          />
          <div className="bg-white text-neutral-score-text min-h-max rounded-lg w-[170px] text-[16px] text-center">
            <h4 className='mt-2'>SCORE</h4>
            <h1 className="text-neutral-dark-text font-bold text-[70px]">12</h1>
          </div>
        </div>
        {/* container buttons */}
        <div className="mt-[150px] relative">
        <img
            src={Triangle}
            className='absolute left-[50%]  translate-x-[-50%] z-0'
          />
          <button className='bg-white w-[220px] h-[220px] shadow1 border-primary-paper-gradient-start border-[25px] rounded-full absolute z-10'>
            <img
              src={Papel}
              className='mx-auto w-[50%]'
            />
          </button>

          <button className='bg-white w-[220px] h-[220px] shadow3 border-primary-scissors-gradient-start border-[25px] rounded-full absolute   z-10'>
            <img
              src={Tijera}
              className='mx-auto w-[50%]'
            />
          </button>
          <button className='bg-white w-[220px] h-[220px] shadow2 border-primary-rock-gradient-start border-[25px] rounded-full absolute z-10 left-50 translate-x-[-50%]'>
            <img
              src={Piedra}
              className='mx-auto w-[50%]'
            />
          </button>
     
      
        </div>

      </div>

    </>
  )
}

export default App
