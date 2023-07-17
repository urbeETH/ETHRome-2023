export default function Venue() {
  return (
    <div className='relative min-h-screen md:h-auto' id='venue'>
      <img src="/venue.jpg" alt="Citta-Altra-Economia" className="object-cover object-[50%] h-[100vh] md:w-full" />
      <div className='absolute w-full h-[200px] top-[-1px] left-0 bg-gradient-to-b from-[#191818] to-transparent'></div>
      <div className='absolute top-24 md:top-[80%] left-1/2 -translate-x-1/2 md:left-48 md:translate-x-0 '>
        <h1 className='text-7xl max-w-4xl text-white font-bold'>Location</h1>
        <p className='text-white max-w-xs md:max-w-[385px] text-center md:text-left font-redhat'>
          Città dell&apos; Altra Economia
        </p>
      </div>
    </div>
  )
}
