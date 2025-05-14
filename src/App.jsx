import React from 'react'

const App = () => {
  return (
    <div className='a p-[20px]'>
      <h1 className='text-[50px] font-bold'>Welkome to React Js</h1>
      <h2 className='text-[30px] font-medium mb-[10px]'>This is my first React app</h2>

      <ul className=' list-disc px-[40px]'>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React</li>
      </ul>

      <h2 className='text-[30px] font-medium mb-[10px]'>What is React</h2>
      <div className="w-[800px]">
         <p className='text-2xl mb-[20px]'>
        React nima? React — bu Facebook tomonidan yaratilgan ochiq kodli JavaScript kutubxonasi
        bo‘lib, asosan foydalanuvchi interfeyslarini (UI) yaratish uchun mo‘ljallangan. U yagona
        sahifali ilovalar (single-page applications) va dinamik, sezgir veb-ilovalarni ishlab
        chiqishda keng qo‘llaniladi.
      </p>
      </div>


      <h2 className='text-[30px] font-medium mb-[10px]'>What is Single-page application</h2>
      <div className="w-[800px]">
         <p className='text-2xl mb-[20px]'>
        SPA (Single Page Application) — bu bitta sahifali veb-ilova bo‘lib, unda sahifa kontenti
        dinamik ravishda yangilanadi va foydalanuvchining har bir amalida butun sahifani qaytadan
        yuklash talab qilinmaydi. JavaScript yordamida faqat kerakli kontent o‘zgartiriladi, bu esa
        ilovani tezkor va foydalanuvchi uchun qulay qiladi.
      </p>
      </div>

    </div>

  )
}

export default App
