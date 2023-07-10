import ArticleHeader from './ArticleHeader'
import Colosseum from '../components/Colosseum'

export default function Article() {
  return (
    <>
      <div className='relative flex flex-col overflow-hidden'>
        <ArticleHeader />
        <div
          className='md:mt-[75px] relative bg-[#191818] overflow-hidden pt-24 pb-16 md:pb-16 md:py-0'
          id='ETHRomeArticle'
        >
          <div className='flex flex-col items-center h-full px-8 space-y-12 justify-evenly md:space-y-0 p-4'>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='max-w-5xl text-4xl text-white md:text-6xl mb-8 mt-8'>ETHRome 2023</h1>
              <h1 className='max-w-5xl text-4xl text-white md:text-6xl'>
                The 1st ETHalian Hackathon{' '}
                <span className='font-black text-rome-yellow'>crafted</span>
              </h1>
              <h1 className=' w-full max-w-5xl text-4xl font-black text-left text-rome-yellow md:text-6xl mb-8'>
                by builders, for builders
              </h1>
            </div>
            <div className='flex space-x-0 md:space-x-24 justify-between'>
              <div className='flex flex-col'>
                <p className='mt-2 ml-2 text-lg font-light text-white md:text-xl font-redhat'>
                  This isn&apos; t a battle of antiquated versus modern, but rather a timeless
                  struggle woven into the fabric of human history: the clash between centralisation
                  and decentralization. It&apos;s the conflict between societal structures where
                  individuals confer rights to a third party, versus those recognizing inherent
                  rights, empowering individuals and granting them full autonomy over their
                  decisions. This important statement is the center of the{' '}
                  <span className='underline'>Declaration of Independence of Cyberspace </span>
                  written by John Perry Barlow in 1996.
                </p>
                <div className='w-full flex justify-center mt-8 mb-8'>
                  <img src='/article_1_img.jpg' alt='' />
                </div>
                <p className='mt-2 ml-2 text-lg font-light text-white md:text-xl font-redhat'>
                  Time has witnessed colossal shifts since then, and Barlow&apos;s guiding
                  principles, once envisaged as the cornerstone of Web 2.0, have been overshadowed
                  by an unprecedented wave of centralisation. Technological behemoths have arisen,
                  feasting on free data provided by the users and transacted without proper
                  safeguards. There are indeed no clear rules on how the data would be managed and
                  the right to privacy protected, or how any wealth generated from this data would
                  be redistributed back to the society and the individuals who provided it.
                </p>
                <p className='mt-2 ml-2 text-lg font-light text-white md:text-xl font-redhat'>
                  This is the chronicle of our era which we are already well-acquainted with.
                  Digital behemoths have become unquenchably greedy, creating walled environments in
                  which we can satisfy many needs, but at the cost of surrendering control,
                  autonomy, and awareness - along with their far-reaching implications. To stop
                  giving value and power to these vicious, centralizing mechanisms we now wield
                  powerful tools capable of harmonizing privacy, collaboration and decentralization
                  with respect for individual rights. “For the first time in history, we need not
                  revolt against a system of violent legal enforcement. We can abandon it for openly
                  verifiable mathematics, which we subscribe to by acts of our own volition. This is
                  because, in the world wide web, running code is more powerful than holding
                  elections.” - Andy Tudhope, <span className='underline'> Kernel Community</span>{' '}
                  In the last 30 years, Barrow&apos;s vision and Cypherpunks&apos; insights have
                  been revised and revitalized, morphing into a shared and continuously evolving
                  legacy informed by a bottom-up and collaborative approach.{' '}
                  <span className='underline'>Interdependence </span> and interoperability are the
                  foundational concepts upon which a distinct future is being crafted for the web,
                  and optimistically, for the entire societal framework.
                </p>
              </div>
            </div>

            <div className='w-full flex justify-center mt-8 mb-8'>
              <img className='w-4/5 md:w-5/12' src='/Urbe+logoOK 1.svg' alt='' />
            </div>
            <div className='flex space-x-0 md:space-x-24 justify-between'>
              <div className='flex flex-col'>
                <p className='mt-2 ml-2 text-lg font-light text-white md:text-xl font-redhat'>
                  In this whirlwind of technologies, ideas, and initiatives, in May 2022 a group of
                  devs based in Rome and with a particular interest in Web3 and decentralization,
                  launched <span className='underline'>urbe.eth</span>. The community was initiated
                  as a Discord channel for Roman Web3 enthusiasts and commenced to host monthly
                  gatherings where experts on decentralization and open-source initiatives could{' '}
                  <span className='underline'>share insights</span> and delineate pathways.
                </p>
                <div className='w-full flex justify-center mt-8 mb-8'>
                  <img src='/UrbeTalkArticle.jpg' alt='' />
                </div>
                <p className='mt-2 ml-2 text-lg font-light text-white md:text-xl font-redhat'>
                  Summoning periodically at co-workings and pubs, Urbe&apos;s numbers began to
                  increase, reaching over 500 people on Discord, +2k on Twitter and 30 to 50
                  attending regular IRL meetups. At this point, the next progression was inevitable.
                </p>
                <div className='w-full flex justify-center mt-8 mb-8'>
                  <img src='/UrbeDelegationArticle.jpg' alt='' />
                </div>
                <p className='mt-2 ml-2 text-lg font-light text-white md:text-xl font-redhat'>
                  Most of Urbe&apos;s lead Devs are regular attendees of large conferences and
                  hackathons worldwide, hence the idea: why not organize one in Rome?
                </p>
                <div className='w-full flex justify-center mt-8 mb-8'>
                  <img className='w-4/6 md:w-1/6' src='/ethrome_logo_article.svg' alt='' />
                </div>
                <p className='mt-2 ml-2 text-lg font-light text-white md:text-xl font-redhat'>
                  With its unique allure, Rome provides an idyllic backdrop for any event. Its
                  architectural marvels and sumptuous cuisine are the perfect framework for
                  delightful interludes. The city&apos;s millennia-old history weaves a vital
                  connection between the past, present, and future, serving as an effective metaphor
                  for how Urbe.eth approaches the development of Web3. ETHRome aspires to confirm
                  that collective intelligence and collaborative effort can fuel meaningful and
                  effective solutions. By designing robust incentive frameworks and supporting novel
                  governance models, we aim to defend and elevate individual rights, confront
                  current challenges within digital networks, and guarantee that all stakeholders
                  are protagonists at each stage. In line with the spirit of Urbe, ETHRome&apos;s
                  goal is to cultivate a fertile ground where people grappling with these issues
                  come together, exchange ideas, impart knowledge, build systems and evaluate their
                  long-term feasibility. Together, and guided by highly experienced mentors.
                </p>
                <div className='w-full flex justify-center mt-8 mb-8'>
                  <img src='/slideArticle.png' alt='' />
                </div>
                <p className='mt-2 ml-2 text-lg font-light text-white md:text-xl font-redhat md:mb-8'>
                  The parts of the crypto space that are honorable are those that actually stay true
                  to its core principles of decentralization, privacy, openness, and transparency.
                  We intend to pursue and uphold these values by summoning key people from all over
                  the world to combine cryptography, tokens, and peer-to-peer networks for the
                  better of cyberspace and the respect of human rights. To have an impact and avoid
                  the same mistakes we did with web2, we do not need just superior technology, but
                  also and foremost more willful participation. The web3 stack alone will not
                  empower us as individuals and as a society: it is on us, the users and builders,
                  to cultivate new systems where prosperity and reciprocal well-being are at the
                  core. Join us to re-imagine the future!
                </p>
              </div>
            </div>
          </div>
        </div>
        <Colosseum />
      </div>
    </>
  )
}
