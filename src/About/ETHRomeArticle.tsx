import ArticleHeader from './ArticleHeader'
import Footer from '../components/Footer'

export default function Article() {
  return (
    <>
      <div className='relative flex flex-col overflow-hidden'>
        <ArticleHeader />
        <div
          className='md:mt-[75px] relative bg-[#EFEBE6] overflow-hidden pt-24 pb-16 md:pb-16 md:py-0'
          id='ETHRomeArticle'
        >
          <div className='flex flex-col items-center h-full px-8 space-y-12 justify-evenly p-4'>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='max-w-5xl text-4xl text-black md:text-6xl mb-8 mt-8'>ETHRome 2023</h1>
              <h1 className='max-w-5xl text-4xl text-black font-bold text-center md:text-6xl'>
                The 1st ETHalian Hackathon{' '}
              </h1>
              <h1 className=' w-full max-w-5xl text-4xl font-black text-left text-rome-yellow text-center md:text-6xl mb-8'>
                crafted by builders, for builders
              </h1>
            </div>
            <div className='flex md:w-3/4 space-x-0 md:space-x-24 justify-between text-justify'>
              <div className='flex flex-col'>
                <p className='text-lg font-light text-black md:text-xl font-redhat'>
                  This isn&apos; t a battle of antiquated versus modern, but rather a timeless
                  struggle woven into the fabric of human history: the clash between centralisation
                  and decentralization. It&apos;s the conflict between societal structures where
                  individuals confer rights to a third party, versus those recognizing inherent
                  rights, empowering individuals and granting them full autonomy over their
                  decisions.
                </p>
                <p className='text-lg font-light text-black md:text-xl font-redhat mt-2'>
                  This statement is the center of the{' '}
                  <a
                    className='underline'
                    href='https://www.eff.org/cyberspace-independence'
                    target='_blank'
                  >
                    Declaration of Independence of Cyberspace
                  </a>
                  {' '}written by John Perry Barlow in 1996.
                </p>
                <div className='w-full flex justify-center my-8'>
                  <img src='/about/article_1_img.jpg' alt='' />
                </div>
                <p className='text-lg font-light text-black md:text-xl font-redhat'>
                  Time has witnessed colossal shifts since 1996, and Barlow&apos;s guiding
                  principles, once envisaged as the cornerstone of Web 2.0, have been overshadowed
                  by an unprecedented wave of centralisation.
                </p>
                <p className='text-lg font-light text-black md:text-xl font-redhat mt-2'>
                  Huge technological monopolies have arisen, feasting on free data provided by users
                  and transacting without proper safeguards. there are no clear rules on how the
                  data would be managed and the privacy protected, or how wealth generated from this
                  data would be redistributed back to the society and the individuals that provided
                  it.
                </p>
                <p className='text-lg font-bold text-black md:text-xl font-redhat mt-2'>
                  These are the chronicles of our era which we are already well-acquainted with.
                </p>
                <p className='text-lg font-light text-black md:text-xl font-redhat mt-2'>
                  Digital behemoths have become unquenchably greedy, creating walled environments in
                  which we can satisfy many needs, but at the cost of surrendering control,
                  autonomy, and awareness - along with their far-reaching implications.
                </p>
                <p className='text-lg font-light text-black md:text-xl font-redhat mt-2'>
                  To stop giving value and power to these vicious, centralizing mechanisms we now
                  wield powerful tools capable of harmonizing privacy, collaboration and
                  decentralization with respect for individual rights.
                </p>
                <p className='text-lg font-light text-black md:text-xl font-redhat mt-2 italic'>
                  “For the first time in history, we need not revolt against a system of violent
                  legal enforcement. We can abandon it for openly verifiable mathematics, which we
                  subscribe to by acts of our own volition. This is because, in the world wide web,
                  running code is more powerful than holding elections.”{' '}
                  <span className='normal'>
                    - Andy Tudhope,
                    <a
                      className='underline'
                      href='https://www.kernel.community/en/'
                      target='_blank'
                    >
                      {' '}
                      Kernel Community
                    </a>
                  </span>
                </p>
                <p className='text-lg font-light text-black md:text-xl font-redhat mt-2'>
                  In the last 30 years, Barrow&apos;s vision and Cypherpunks&apos; insights have
                  been revised and revitalized, morphing into a shared and continuously evolving
                  legacy informed by a bottom-up collaborative approach.
                </p>
                <p className='text-lg font-light text-black md:text-xl font-redhat mt-2'>
                  <a
                    className='underline'
                    href='https://www.interdependence.online/about'
                    target='_blank'
                  >
                    Interdependence
                  </a>{' '}
                  and interoperability are the foundational concepts upon which a distinct future is
                  being crafted for the web, and optimistically, for the entire societal framework.
                </p>
              </div>
            </div>

            <div className='w-full flex justify-center md:mt-16 md:mb-16'>
              <img className='w-4/5 md:w-5/12' src='/about/UrbeConquer_logo.svg' alt='' />
            </div>
            <div className='flex md:w-3/4 space-x-0 md:space-x-24 justify-between text-justify'>
              <div className='flex flex-col'>
                <p className='text-lg font-light text-black md:text-xl font-redhat'>
                  In this whirlwind of technologies, ideas, and initiatives, in May 2022 a group of
                  devs based in Rome and with a particular interest in Web3 and decentralization,
                  launched{' '}
                  <a className='underline' href='https://linktr.ee/urbe.eth' target='_blank'>
                    urbe.eth
                  </a>
                  .
                </p>
                <p className='text-lg font-light text-black md:text-xl font-redhat mt-2'>
                  The community was initiated as a Discord channel for Roman Web3 enthusiasts and
                  commenced to host monthly gatherings where experts on decentralization and
                  open-source initiatives could{' '}
                  <a
                    className='underline'
                    href='https://www.youtube.com/channel/UC15_amrqg-rAKHlH8eYGD2Q'
                    target='_blank'
                  >
                    share insights
                  </a>{' '}
                  and initiate conversations.
                </p>
                <p className='text-lg font-light text-black md:text-xl font-redhat mt-2'>
                  Meeting periodically at co-workings and pubs, Urbe&apos;s numbers began to
                  increase, reaching over 500 people on Discord, +2k on Twitter and 30 to 50
                  attending regular IRL meetups. At this point, the next progression was inevitable.
                </p>
                <div className='w-full flex justify-center my-8'>
                  <img src='/about/UrbeDelegationArticle.jpg' alt='' />
                </div>
                <p className='text-lg font-light text-black md:text-xl font-redhat text-center'>
                  Most of Urbe&apos;s lead Devs are regular attendees of large conferences and
                  hackathons worldwide, hence the idea:
                </p>
                <p className='text-xl font-black text-black md:text-2xl font-redhat text-center'>
                  why not organize one in Rome?
                </p>
                <div className='w-full flex justify-center my-8'>
                  <img
                    className='w-4/6 md:w-1/6'
                    src='/about/ethrome_logo_black_article.svg'
                    alt=''
                  />
                </div>
                <p className='text-lg font-light text-black md:text-xl font-redhat'>
                  With its unique allure, Rome provides an idyllic backdrop for any
                  event.Conversations flow easy when you&apos;re watching a sunset over the capitol hills
                  with a glass of wine, waiting for your plate of carbonara to arrive. The
                  city&apos;s millennia-old history weaves a vital connection between the past,
                  present, and future, serving as an effective metaphor for how Urbe.eth approaches
                  the development of Web3.
                </p>
                <p className='text-lg font-bold text-black md:text-xl font-redhat mt-2'>
                  <a className='underline' href='https://ethrome.org/' target='_blank'>
                    ETHRome
                  </a>{' '}
                  aspires to confirm that collective intelligence and collaborative effort can fuel
                  meaningful and effective solutions. By designing robust incentive frameworks and
                  supporting novel governance models, we aim to defend and elevate individual
                  rights, confront current challenges within digital networks, and guarantee that
                  all stakeholders are protagonists at each stage.
                </p>
                <p className='text-lg font-light text-black md:text-xl font-redhat mt-2'>
                  In line with the spirit of Urbe, ETHRome&apos;s goal is to cultivate a fertile
                  ground where people grappling with these issues come together, exchange ideas,
                  impart knowledge, build systems and evaluate their long-term feasibility.
                  Together, and guided by highly experienced mentors.
                </p>
                <div className='w-full flex justify-center my-8'>
                  <img src='/about/slideArticle.png' alt='' />
                </div>
                <p className='text-lg font-light text-black md:text-xl font-redhat'>
                  The parts of crypto space that are honorable are the ones that are true to
                  principles of decentralization, privacy and transparency.
                </p>
                <p className='text-lg font-light text-black md:text-xl font-redhat mt-2'>
                  We intend to pursue and uphold these values by summoning key people from all over
                  the world to combine cryptography, tokens, and peer-to-peer networks for a better
                  cyberspace, hence respecting human rights.
                </p>
                <p className='text-lg font-bold text-black md:text-xl font-redhat mt-2'>
                  To have an impact and avoid the same mistakes we did with web2, we do not need
                  just superior technology, but more importantly, active and willful participation.
                </p>
                <p className='text-lg font-light text-black md:text-xl font-redhat mt-2'>
                  The web3 stack alone will not empower us as individuals and as a society: it is on
                  us, the users and builders, to cultivate new systems where prosperity and
                  reciprocal well-being are at the core.
                </p>
                <p className='text-lg font-light text-black md:text-xl font-redhat mt-2 md:mb-8'>
                  <a
                    className='underline'
                    href='https://bit.ly/ethrome-hacker-form-2'
                    target='_blank'
                  >
                    Join us
                  </a>{' '}
                  to re-imagine the future!
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
