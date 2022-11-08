import React, { useEffect, useState } from 'react'
import line from '../images/pattern-divider-desktop.svg'
import dice from '../images/icon-dice.svg'

function Quotes() {
  const [quote, setQuote] = useState(
    'It is an acknowledged fact that we perceive errors in the work of others more readily than in our own.'
  )

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c599114a1emsh1142a01581c3d5ap1676dfjsndc89f719989b',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
      },
    }

    fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
      .then((response) => response.json())
      .then((response) => setQuote(response.content))
      .catch((err) => console.error(err))
  }, [loading])

  const handlerLoad = () => {
    setLoading(!loading)
  }
  return (
    <div className='relative bg-gray-700  w-[90%] h-[50%] rounded-3xl text-center mt-[20%] md:w-[60%] md:mt-[15%] lg:w-[60%]'>
      <h1 className=' text-myOwnNeonGreen uppercase tracking-widest font-bold text-sm mt-[10%] xl:mt-[5%]'>
        Quote # {Math.floor(Math.random() * 100)}
      </h1>
      <p className='w-[80%] h-[50%] mx-auto mt-[5%] text-slate-300 text-2xl font-bold overflow-scroll md:w-[50%] md:h-[40%]'>
        "{quote}"
      </p>
      <img
        src={line}
        alt='divider line'
        className='absolute  w-[90%] h-[5%] ml-[50%] translate-x-[-50%] top-[80%] md:w-[60%]'
      />
      <div
        onClick={handlerLoad}
        className=' bg-myOwnNeonGreen rounded-full cursor-pointer absolute -top-[-90%] w-20 h-20 ml-[50%] translate-x-[-50%] flex justify-center items-center transition-timing-function: linear active:w-[20%] active:h-[20%] hover:shadow hover:shadow-myOwnNeonGreen '>
        <img src={dice} alt='dice' />
      </div>
    </div>
  )
}

export default Quotes
