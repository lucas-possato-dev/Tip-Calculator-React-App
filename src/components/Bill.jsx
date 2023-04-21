import React from 'react'
import dolars from '../assets/images/icon-dollar.svg'

const Bill = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [percentage, setPercentage] = React.useState(0);
  const [peopleNumber, setPeopleNumber] = React.useState(0);
  const [customPercentage, setCustomPercentage] = React.useState(0);

  function handleInputChange({target}) {
    setInputValue(target.value)
  }

  function handleInputPeople({target}) {
    setPeopleNumber(target.value);
  }

  const handleCustomPercentage = (e) => {
    setCustomPercentage(e.target.value);
  };

  const handlePercentage = (e) => {
    if (e.target.value === "custom") {
      setPercentage(customPercentage);
    } else {
      setCustomPercentage(0);
      setPercentage(e.target.value);
    }
  };

  function handleClick() {
    setPercentage(0);
    setPeopleNumber(0);
    setInputValue(0);
  }
  

  return (
  <div className='bg-white md:h-[500px] h-screen md:max-w-[800px] md:grid md:gap-8 md:grid-cols-2 w-screen md:rounded-3xl rounded-t-3xl p-6'>
    <div className='flex flex-col gap-2 relative justify-center'>
        <span className='text-[#5e7a7d] text-sm block mt-6'>Bill</span>
        <input onChange={handleInputChange} className='text-[#00494d] text-2xl border outline-[#26c0ab] text-right  h-8' type="number" placeholder='0' />
        <img className='h-3 w-3 absolute left-8 md:left-4 top-14 md:top-20 mt-2' src={dolars} alt="" />
        <span className='text-[#5e7a7d] text-sm block mt-6'>Select Tip %</span>
        <div>
          <div className='grid grid-cols-2 gap-2'>
            <button onClick={handlePercentage} value={5} className='bg-[#00494d] text-white px-8 rounded py-2 text-xl flex-1 text-center hover:bg-[#26c0ab] cursor-pointer'>5%</button>
            <button onClick={handlePercentage} value={10} className='bg-[#00494d] text-white px-8 rounded py-2 text-xl flex-1 text-center hover:bg-[#26c0ab] cursor-pointer'>10%</button>
            <button onClick={handlePercentage} value={15} className='bg-[#00494d] text-white px-8 rounded py-2 text-xl flex-1 text-center hover:bg-[#26c0ab] cursor-pointer'>15%</button>
            <button onClick={handlePercentage} value={25} className='bg-[#00494d] text-white px-8 rounded py-2 text-xl flex-1 text-center hover:bg-[#26c0ab] cursor-pointer'>25%</button>
            <button onClick={handlePercentage} value={50} className='bg-[#00494d] text-white px-8 rounded py-2 text-xl flex-1 text-center hover:bg-[#26c0ab] cursor-pointer'>50%</button>
            <input className='text-[#00494d] outline-[#26c0ab] text-right text-2xl' type="number" placeholder='Custom' value={customPercentage}  onChange={handleCustomPercentage} />
          </div>
        </div>
      <div className='flex flex-col'>
        <span className='text-[#5e7a7d] text-sm block mt-6'>Number of people</span>
        <input onChange={handleInputPeople} className='text-[#00494d] outline-[#26c0ab] text-right text-2xl mb-8' type="number" placeholder='0' />
      </div>
    </div>
    <div className='p-4 grid grid-cols-2 rounder-xl bg-[#00494d] h-[250px] md:h-full rounded-lg w-full'>
      <div className='flex flex-col'>
        <span className='text-white text-xs block ml-6 mt-6'>Tip Amount</span>
        <span className='text-[#5e7a7d] text-[0.65rem] block ml-6'>/ person</span>
      </div>
      <div className='flex justify-end mr-8 mt-4'>
      <span className='text-3xl text-[#26c0ab] block'>
  {'$' + ((((inputValue * (customPercentage || percentage)) / 100) / (peopleNumber || 1)).toFixed(2))}
</span>

      </div>
      <div className='flex flex-col'>
        <span className='text-white text-xs block ml-6 mt-6'>Total</span>
        <span className='text-[#5e7a7d] text-[0.65rem] block ml-6'>/ person</span>
      </div>
      <div className='flex justify-end mr-8 mt-4'>
      <span className='text-3xl text-[#26c0ab] block'>
  {'$' + ((((inputValue * (customPercentage || percentage)) / 100) + Number(inputValue)) / (peopleNumber || 1)).toFixed(2)}
</span>




      </div>
        <button onClick={handleClick} className='block h-12 rounded-md w-full text-[#00494d] hover:text-[#2bcab5] col-span-full bg-[#15a18f] hover:bg-[#0a7e6e]'>RESET</button>
    </div>  
    
  </div>
  )
}

export default Bill