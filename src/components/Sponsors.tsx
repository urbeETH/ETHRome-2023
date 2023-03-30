export default function Sponsor() {
    return (
        <div className='h-auto py-24 md:py-0 md:h-screen relative bg-[#EFEBE6]'>
            <div className='flex flex-col items-center justify-center h-full space-y-24' id='contact'>
                <div className='flex flex-col md:flex-row items-center space-x-0 md:space-x-24'>
                    <img src='/openq.png' className='h-48 md:h-auto' />
                    <img src='/spaghett-eth.png' className='h-48 md:h-auto' />
                    <img src='/talentgarden.png' className='h-48 md:h-auto' />
                </div>
                <div className='flex flex-col md:flex-row items-center space-x-0 md:space-x-24'>
                    <img src='/ethdam.png' className='h-48 md:h-auto' />
                    <img src='/ledger.png' className='h-48 md:h-auto' />
                    <img src='/yomi.png' className='h-48 md:h-auto' />
                </div>
            </div>
        </div>
    )
}
