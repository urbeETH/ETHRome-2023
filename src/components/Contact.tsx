
export default function Contact() {
  return (
    <div className='h-auto py-24 md:py-0 md:h-screen relative bg-[#EFEBE6]'>
      <div className='flex flex-col items-center justify-center h-full space-y-24' id='contact'>
        <div className='flex flex-col items-center space-x-0 md:flex-row md:space-x-24'>
          <img src='/crown.png' className='h-48 md:h-auto' />
          <div className='flex flex-col items-center justify-center space-y-4 text-center md:items-start md:justify-start md:text-left'>
            <h1 className='font-bold text-7xl'>Sponsor Zone</h1>
            <p>Elevate your brand and expand your network with a sponsorship at our event!</p>
            <p>
              Connect with top talent, showcase your innovative product, and take your business to
              new heights.
            </p>
            <a
              href="mailto:sponsor@ethrome.org?subject=Request%20ETHRome%20Deck"
              target="_blank"
              className='w-40 hover:bg-rome-50 transition-colors bg-rome-100 drop-shadow-[0_10px_8px_rgba(131,20,199,0.25)] rounded-full flex items-center justify-center text-white py-2 font-medium cursor-pointer'
            >
              <p>Request Sponsor deck</p>
            </a>
            <a href='mailto:sponsor@ethrome.org?subject=Request%20ETHRome%20Deck' className='text-rome-100'>
              sponsor@ethrome.org
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
