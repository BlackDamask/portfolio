import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

function App() {
  // gsap.registerPlugin(useGSAP);gsap.registerPlugin(SplitText); // register any plugins, including the useGSAP hook

  // const container = useRef<HTMLDivElement>(null);
  // useGSAP(() => {
    

  //   gsap.set("h1", { opacity: 1 });

  //   const split = SplitText.create("#heading", { type: "chars" });
  //   //now animate each character into place from 20px below, fading in:
  //   gsap.from(split.chars, {
  //     y: 20,
  //     autoAlpha: 0,
  //     stagger: 0.05
  //   });
  // }, {scope: container});
    
  const techs = [
    { name: 'React' },
    { name: 'TypeScript' },
    { name: 'Tailwind CSS' },
    { name: '.NET'},
    { name: 'EF Core'},
    { name: 'PostgreSQL'},
    { name: 'MS SQL'},
    { name: 'nginx'},
    { name: 'aws'},
  ];

  const headingRef = useRef<HTMLHeadingElement>(null);
  const charsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const fullstack = 'FULLSTACK'.split('');
  const developer = 'DEVELOPER'.split('');
  const developerRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (charsRef.current.length) {
      gsap.fromTo(
        charsRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
    if (developerRef.current.length) {
      gsap.fromTo(
        developerRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.08,
          delay: 0.5,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    const techElements = document.querySelectorAll('.tech-text');
    techElements.forEach((tech) => {
      const chars = tech.querySelectorAll('.tech-char');
      gsap.to(chars, {
        color: 'white',
        stagger: {
          each: 0.1,
          from: 'end',
        },
        scrollTrigger: {
          trigger: tech,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
      });
    });
  }, []);

  return (
    <div className="bg-[#111111] w-screen h-full flex flex-col items-center justify-center scroll-none">
      <nav className='absolute px-[30px] lg:px-[60px] py-[30px] top-0 left-0 text-white'>
        <a className='xl:text-[32px] 2xl:text-[40px] font-[300] text-white text-heading'>
          Maksym Tiupa
        </a>
      </nav>
      <main className='w-full'>
        <section className='grid grid-cols-2 items-center  h-screen  relative px-[30px] lg:px-[60px]'>
          <h1 ref={headingRef} id='heading' className=' overflow-hidden text-heading font-bold text-[40px] md:text-[50px] lg:text-[65px] leading-[100%] xl:text-[85px] 2xl:text-[105px] xl:leading-[120px] 2xl:leading-[140px] uppercase mb-16 text-white'>
            {fullstack.map((char, i) => (
              <span
                key={i}
                ref={el => { charsRef.current[i] = el; }}
                style={{ display: 'inline-block' }}
              >
                {char}
              </span>
            ))}
            <br />
            <span className='ml-10 whitespace-nowrap'>
              {developer.map((char, i) => (
                <span
                  key={i}
                  ref={el => { developerRef.current[i] = el; }}
                  style={{ display: 'inline-block' }}
                >
                  {char}
                </span>
              ))}
            </span>
          </h1>
          <div className='flex items-center justify-center'>
            <img
              src='selfie.png'

              alt='Selfie'
              className='object-cover w-1/2 aspect-square rounded-[50%] mb-16'
            />
          </div>
         

          <div className='absolute left-0 bottom-[60px] right-0 flex items-end lg:items-start justify-between px-[30px] lg:px-[60px]'>
            <div className="bottom-10 left-1/2 aspect-square h-[80px]   ">
              <ul id="downArrow">
                <li ></li>
                <li ></li>
                <li ></li>
            </ul>
            </div>
            <div className='flex flex-col mb-2 lg:mb-0'> 
              <div className='flex items-center gap-4 xl:gap-[20px] 2xl:gap-[30px] down'>
                <h3 className='uppercase xl:text-[26px] 2xl:text-[32px] font-[400] text-white'>
                  Open to work
                </h3>
                
            </div>
            <h4 className='font-[200] text-white ml-1 based-in'>
              Based in Poland
            </h4>
          </div>
          </div>
        </section>
        <section className="py-[80px] lg:py-[200px] relative grid grid-cols-12 px-[30px] lg:px-[60px]">
          <div className='text col-span-12 lg:col-span-12 flex flex-col gap-14'>
          {techs.map((tech, index) => (
            <p key={index} className='tech-text uppercase font-bold text-right text-[40px] lg:text-[100px] first-p text-gray-500'>
              {tech.name.split('').map((char, charIndex) => (
                <span key={charIndex} className="tech-char" style={{display: 'inline-block'}}>{char === ' ' ? '\u00A0' : char}</span>
              ))}
            </p>
          ))}
            
          </div>
        </section>
        <section className='lg:mt-[80px] px-[30px] lg:p-[60px] flex items-center justify-center portfolio-wrapper'>
          <div className='no-scrollbar overflow-hidden pb-[80px] w-full overflow-x-hidden'>
            <div className='flex items-center lg:ml-10 gap-[10px] mt-[100px]'>
              <img src="/asterisk.svg" alt="asterisk" className="object-contain animate-[spin_3s_linear_infinite] selected-projects-asterisk" style={{ opacity: 1 }} />
              <h2 className="uppercase text-white selected-projects font-light text-[16px] lg:text-[20px] ml-3 whitespace-nowrap">
                Selected works
              </h2>
            </div>
            <hr className="my-7 w-full bg-white h-[1px] text-white opacity-20" />
              <a className='project-item group flex items-center justify-between'>
                <h3 className='uppercase text-[30px] whitespace-nowrap lg:text-[60px] text-white group-hover:translate-x-5 duration-500 transition'>
                  Minesweeper battle
                </h3>
                <img src="/asterisk.svg" alt="arrow" className="project-img-1 scale-50 lg:group-hover:scale-100 h-[100px] lg:h-[150px] opacity-0 transition duration-500 group-hover:opacity-100" />
              </a>
            <hr className="my-7 w-full bg-white h-[1px] text-white opacity-20" />
            <a className='project-item group flex items-center justify-between'>
              <h3 className='uppercase text-[30px] whitespace-nowrap lg:text-[60px] text-white group-hover:translate-x-5 duration-500 transition'>
                Slupian Chess Ligue
              </h3>
              <img src="/asterisk.svg" alt="arrow" className="project-img-1 scale-50 lg:group-hover:scale-100 h-[100px] lg:h-[150px] opacity-0 transition duration-500 group-hover:opacity-100" />
            </a>
            <hr className="my-7 w-full bg-white h-[1px] text-white opacity-20" />
            <a className='project-item group flex items-center justify-between'>
              <h3 className='uppercase text-[30px] whitespace-nowrap lg:text-[60px] text-white group-hover:translate-x-5 duration-500 transition'>
                Time Tone
                </h3>
              <img src="/asterisk.svg" alt="arrow" className="project-img-1 scale-50 lg:group-hover:scale-100 h-[100px] lg:h-[150px] opacity-0 transition duration-500 group-hover:opacity-100" />
            </a>
            <hr className="my-7 w-full bg-white h-[1px] text-white opacity-20" />
          </div>
        </section>
        <section className="px-[30px] lg:px-[60px] lg:mx-10 mb-[100px] lg:mb-[200px] flex flex-col lg:flex-row mt-[50px] lg:mt-[100px]">
          <div className="lg:w-1/2">
            <a className='uppercase hover:bg-white hover:text-black transition-colors get-in-touch block text-center text-white text-[30px] w-full lg:!w-fit lg:text-[60px] rounded-full px-9 py-2 border border-white'>
              Get in touch
            </a>
          </div>
            <div className='flex flex-col w-full lg:items-end lg:w-1/2 gap-6 mt-16 lg:mt-0'>
            <a className="link-underline gap-4 text-[20px] social-link lg:text-[30px] flex items-center relative lg:w-1/3 justify-between text-white cursor-pointer"  target="_blank" >
              Linkedin
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Arrow / Arrow_Up_Right_LG">
                  <path id="Vector" d="M18.3646 5.63623H11.2939M18.3646 5.63623L18.3643 12.7073M18.3646 5.63623L5.63672 18.3642" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </g>
              </svg>
            </a>
            <a className="link-underline gap-4 text-[20px] social-link lg:text-[30px] flex items-center relative lg:w-1/3 justify-between text-white cursor-pointer"  target="_blank" >
              GitHub
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Arrow / Arrow_Up_Right_LG">
                  <path id="Vector" d="M18.3646 5.63623H11.2939M18.3646 5.63623L18.3643 12.7073M18.3646 5.63623L5.63672 18.3642" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </g>
              </svg>
            </a>
            </div>
        </section>

      </main>
    </div>
  )
}

export default App


