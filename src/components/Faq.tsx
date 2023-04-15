import { Disclosure, Transition } from '@headlessui/react';
import { Icon } from '@iconify/react';

const faqs = [ {
    id: 1,
    question: 'What is ETHRome?',
    answer: 'ETHRome is an international event based in the ETHernal City. It provides a unique opportunity for participants to network and collaborate with like-minded individuals from different parts of the world, bringing together diverse perspectives and expertise to tackle a common challenge, the Hackathon. Within 36 hours several teams will have the opportunity to showcase and promote new ideas and technologies to a global audience; and get sponsored prizes',
  },
  {
    id: 2,
    question: 'Who can attend ETHRome?',
    answer: 'ETHRome welcomes participants from all backgrounds, whether they are developers, designers, or have other skill sets. Applications to participate are evaluated based on their interest and experience with Ethereum, as well as their demonstrated ability to build and create - whether that involves software development, designing user experiences, or other talents. If you are under 18 years of age, a parental consent form will be required to participate'
  },
  {
    id: 1,
    question: 'How much does it cost to attend?',
    answer: 'Admission to the event is completely free, thanks to the generosity of our sponsors. Participants will receive a weekend^s worth of swag, including t-shirts and other items, as well as meals, drinks, and snacks to keep them fueled throughout the event. Additionally, a place to rest and recharge will be provided for participants who need a break from coding. This ensures that all participants have the resources they need to focus on creating innovative solutions to the challenges presented at the event. We are committed to making this event accessible to all, regardless of financial means, and are grateful to our sponsors for their support in making this possible.'
  },
  {
    id: 1,
    question: 'Can we apply as a team?',
    answer: 'Yes, participants can choose to participate either as individuals or as part of a team with up to 5 members. This allows for flexibility in how participants approach the challenges presented at the event, and provides opportunities for both individual creativity and collaborative problem-solving. Whether participants choose to work solo or as part of a team, the event offers a supportive and inclusive environment for all to learn and create together.'
  },
  {
    id: 1,
    question: 'How does judging work?',
    answer: 'A panel of experienced builders will evaluate the hacks created by participants based on a set of criteria including creativity, technical difficulty, design, and usefulness. The panel will carefully consider each project and provide feedback to participants to help them refine and improve their work. This provides a platform for participants to share their innovative ideas and solutions with a wider audience and receive recognition for their hard work and creativity. The evaluation process ensures that all participants have a fair opportunity to demonstrate their skills and creativity, and provides valuable feedback for everyone to learn and grow from.'
  }]

export default function Faq() {
    return (
        <div className='py-24 md:py-0 relative bg-[#191818]'>
            <div className='flex flex-col items-center justify-center h-full space-y-24 md:mt-24 mt-0' id='faq'>
            <h1 className="text-7xl text-center max-w-4xl text-white font-bold">FAQ</h1>
            {faqs.map((faq) => (
          <Disclosure key={faq.id}>
            {({ open}) => (
              <>
                  <div className='w-6/12 items-center'>
                    <Disclosure.Button className="flex flex-col md:flex-row w-full justify-center md:justify-between items-center rounded-lg bg-[#fabb00] px-4 py-3 mb-2 md:text-left text-center text-xl text-black">
                      <span>{faq.question}</span>
                      { open ? <Icon icon="mdi-light:minus" className='w-full md:w-auto mt-4 bg-white rounded-full' /> : <Icon icon="mdi-light:plus" className='w-full md:w-auto mt-4 bg-white rounded-full' />}
                    </Disclosure.Button>
                    <Transition
                        show={open}
                        enter="transition duration-1000 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-100 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      > </Transition>
                    {open && (
                      <Disclosure.Panel static className="text-white flex w-full justify-between rounded-lg px-4 md:mt-4 mt-8 mb-2 text-center text-xl">
                        {faq.answer}
                      </Disclosure.Panel>
                    )}
                  </div>
              </>
            )}
          </Disclosure>
        ))}
            </div>
        </div>
    )
}