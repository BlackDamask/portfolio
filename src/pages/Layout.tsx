import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import '../App.css';

function Layout() {

    
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
  const selfieRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLAnchorElement>(null);
  const nameCharsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const selectedWorksRef = useRef<HTMLDivElement>(null);
  const selectRef = useRef<HTMLDivElement>(null);
  const { i18n, t } = useTranslation();
  console.log('Current language:', i18n.language);
  console.log('Translation for openToWork:', t('openToWork'));

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
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
          onComplete: () => {
            if (selfieRef.current) {
              gsap.fromTo(selfieRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 2.5, ease: 'power3.out' });
            }
          }
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
          }
        }
      );
    }

    const techElements = document.querySelectorAll('.tech-text');
    techElements.forEach((tech) => {
      const chars = tech.querySelectorAll('.tech-char');
      gsap.to(chars, {
        color: 'white',
        stagger: {
          each: 0.2,
          from: 'end',
        },
        scrollTrigger: {
          trigger: tech,
          start: 'top 60%',
          end: 'bottom 50%',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
      });
    });

    // Animate hr elements width from 0 to 100% (but skip those under .social-link)
    const hrElements = Array.from(document.querySelectorAll('hr')).filter(hr => {
      // Only animate if not inside a .social-link parent
      return !hr.closest('.social-link');
    });
    hrElements.forEach((hr) => {
      gsap.fromTo(hr, 
        { 
          width: '0%' 
        },
        {
          width: '100%',
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: hr,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Overlay drop animation on mount
    if (overlayRef.current) {
      gsap.fromTo(
        overlayRef.current,
        { y: 0 },
        {
          y: '100%',
          duration: 1.2,
          ease: 'power3.inOut',
          onComplete: () => {
            if (overlayRef.current) {
              overlayRef.current.style.display = 'none';
            }
          },
        }
      );
    }

    // Scroll-triggered animation for Maksym Tiupa name
    if (nameCharsRef.current.length) {
      gsap.fromTo(
        nameCharsRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.07,
          scrollTrigger: {
            trigger: nameRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Animate Selected Works section on scroll (from left, more visible)
    if (selectedWorksRef.current) {
      gsap.fromTo(
        selectedWorksRef.current,
        { x: -520, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: selectedWorksRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Project item image visibility on click/touch
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
      const img = item.querySelector('img');
      if (!img) return;

      const showImage = () => img.classList.add('show');
      const hideImage = () => img.classList.remove('show');

      item.addEventListener('mousedown', showImage);
      item.addEventListener('mouseup', hideImage);
      item.addEventListener('mouseleave', hideImage);
      item.addEventListener('touchstart', showImage);
      item.addEventListener('touchend', hideImage);
    });

    // Animate language select on scroll
    if (selectRef.current) {
      gsap.fromTo(
        selectRef.current,
        { x: 400, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: selectRef.current,
            start: 'top top+=40',
            toggleActions: 'play none none none',
          },
        }
      );
    }

  }, []);

  const handleArrowClick = () => {
    if (selectedWorksRef.current) {
      gsap.to(window, {
        duration: 4,
        scrollTo: { y: selectedWorksRef.current, offsetY: 0 },
        ease: 'power2.inOut',
      });
    }
  };

  return (
    <>
      <div
        ref={overlayRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'white',
          zIndex: 9999,
        }}
      />
      <div className="bg-[#111111] w-screen h-full flex flex-col items-center justify-center scroll-none">
        {/* Language select dropdown */}
        <div ref={selectRef} className="absolute top-0 right-0  z-[10] mx-[20px] lg:mx-[40px] my-[20px]">
          <select
            value={i18n.language}
            onChange={e => i18n.changeLanguage(e.target.value)}
            className="bg-[#111] text-white px-4 py-2 border border-white rounded-none"
          >
            <option className='bg-[#111] text-white' value="en">English</option>
            <option className='bg-[#111] text-white' value="pl">Polski</option>
            <option className='bg-[#111] text-white' value="ua">Українська</option>
          </select>
        </div>
        <nav className='absolute px-[30px] lg:px-[60px] py-[30px] top-0 left-0 text-white'>
          <a ref={nameRef} className='text-[20px] lg:text-[24px] xl:text-[26px] 2xl:text-[32px] font-[300] text-white text-heading'>
            {Array.from(t('name')).map((char, i) => (
              <span
                key={i}
                ref={el => { nameCharsRef.current[i] = el; }}
                style={{ display: 'inline-block' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </a>
        </nav>
        <main className='w-full'>
          <section className='grid grid-cols-2 items-center h-screen relative px-[30px] lg:px-[60px]'>
            {/* Image at top for 1 col, right for 2 cols */}
            
            <h1 ref={headingRef} id='heading' className='overflow-hidden text-heading font-bold text-[20px] sm:text-[40px] md:text-[50px] lg:text-[65px] leading-[100%] xl:text-[85px] 2xl:text-[105px] xl:leading-[120px] 2xl:leading-[140px] uppercase mb-16 text-white'>
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
            <div className='flex items-center justify-center w-full'>
              <img
                ref={selfieRef}
                src='selfie.png'
                alt='Selfie'
                className='object-cover aspect-square w-1/2 rounded-[50%] mb-16'
                style={{ opacity: 0 }}
              />
            </div>
            <div className='absolute left-0 bottom-[60px] right-0 flex items-end lg:items-start justify-between px-[30px] lg:px-[60px]'>
              <div className="bottom-10 left-1/2 aspect-square h-[80px] cursor-pointer ">
                <ul id="downArrow" onClick={handleArrowClick}>
                  <li ></li>
                  <li ></li>
                  <li ></li>
                </ul>
              </div>
              <div className='flex'>
                <div className='flex flex-col mb-2 lg:mb-0'> 
                  <div className='flex items-center gap-4 xl:gap-[20px] 2xl:gap-[30px] down'>
                    <h3 className='uppercase text-[12px] sm:text-[15px] md:text-[20px] lg:text-[24px] xl:text-[26px] 2xl:text-[32px] font-[400] text-white'>
                      {t('openToWork')}
                    </h3>
                    <img src="/asterisk.svg" alt="asterisk" 
                    className="w-4 sm:w-5 md:w-6 lg:w-7 object-contain animate-[spin_3s_linear_infinite] selected-projects-asterisk" 
                    style={{ opacity: 1 }} />
                  </div>
                  <h4 className='text-[11px] sm:text-[14px] md:text-[18px] lg:text-[23px] xl:text-[25px] 2xl:text-[31px] font-[200] text-white ml-1 based-in'>
                    {t('basedIn')}
                  </h4>
                </div>
              </div>
            </div>
          </section>
          <section className="py-[80px] lg:py-[200px] relative grid grid-cols-12 px-[30px] lg:px-[60px]">
            <div className='text col-span-12 lg:col-span-12 flex flex-col gap-14'>
              {techs.map((tech, index) => (
                <p key={index} className='tech-text uppercase font-bold text-right text-[40px] lg:text-[100px] first-p text-zinc-500'>
                  {tech.name.split('').map((char, charIndex) => (
                    <span key={charIndex} className="tech-char" style={{display: 'inline-block'}}>{char === ' ' ? '\u00A0' : char}</span>
                  ))}
                </p>
              ))} 
            </div>
          </section>
          <section className='lg:mt-[80px] px-[30px] lg:p-[60px] flex items-center justify-center portfolio-wrapper'>
            <div ref={selectedWorksRef} className='no-scrollbar overflow-hidden pb-[80px] w-full overflow-x-hidden'>
              <div className='flex items-center lg:ml-10 gap-[10px] mt-[100px]'>
                <img src="/asterisk.svg" alt="asterisk" className="w-4 sm:w-5 md:w-6 lg:w-7 object-contain animate-[spin_3s_linear_infinite] selected-projects-asterisk" style={{ opacity: 1 }} />
                <h2 className="text-[12px] sm:text-[15px] md:text-[20px] lg:text-[24px] xl:text-[26px] 2xl:text-[32px] uppercase text-white selected-projects font-light  ml-3 whitespace-nowrap">
                  {t('selectedWorks')}
                </h2>
              </div>
              <hr className="my-7 w-0 bg-white h-[1px] text-white opacity-20" />
                <a href="/minesweeper" className='project-item group flex items-center justify-between h-[75px] sm:h-[150px] lg:h-[200px] cursor-pointer'>
                  <h3 className='uppercase text-[20px] sm:text-[30px] whitespace-nowrap lg:text-[50px] xl:text-[65px] text-white group-hover:translate-x-5 duration-500 transition'>
                    Minesweeper battle
                  </h3>
                  <img src="/minesweeper.png" alt="arrow" className="project-img-1 scale-50 group-hover:scale-100 h-full opacity-0 transition duration-500 group-hover:opacity-100" />
                </a>
              <hr className="my-7 w-0 bg-white h-[1px] text-white opacity-20" />
              <a href="/sls" className='project-item group flex items-center justify-between h-[75px] sm:h-[150px] lg:h-[200px]'>
                <h3 className='uppercase text-[20px] sm:text-[30px] whitespace-nowrap lg:text-[50px] xl:text-[65px] text-white group-hover:translate-x-5 duration-500 transition'>
                  {t('slupianChessLigue')}
                </h3>
                <img src="/sls.png" alt="arrow" className="project-img-1 scale-50 group-hover:scale-100 h-full opacity-0 transition duration-500 group-hover:opacity-100" />            
              </a>
              <hr className="my-7 w-0 bg-white h-[1px] text-white opacity-20" />
              <a className='project-item group flex items-center justify-between h-[75px] sm:h-[150px] lg:h-[200px]'>
                <h3 className='uppercase text-[20px] sm:text-[30px] whitespace-nowrap lg:text-[50px] xl:text-[65px] text-white group-hover:translate-x-5 duration-500 transition'>
                  Time Tone
                  </h3>
                <img src="/minesweeper.png" alt="arrow" className="project-img-1 scale-50 group-hover:scale-100 h-full opacity-0 transition duration-500 group-hover:opacity-100" />   
              </a>
              <hr className="my-7 w-0 bg-white h-[1px] text-white opacity-20" />

            </div>
          </section>
          <section className="px-[30px] lg:px-[30px] lg:mx-10 mb-[100px] lg:mb-[200px] flex flex-col lg:flex-row mt-[50px] lg:mt-[100px]">
            <div className="lg:w-1/2">
              <a href="mailto:tupamaxim6@gmail.com" className='uppercase hover:bg-white hover:text-black transition-colors get-in-touch block text-center text-white text-[30px] w-full lg:!w-fit lg:text-[60px] rounded-full px-9 py-2 border border-white'>
                {t('getInTouch')}
              </a>
            </div>
              <div className='social-links flex flex-col w-full lg:items-end lg:w-1/2 gap-6 mt-16 lg:mt-0'>
                <a className="link-underline  text-[20px] social-link lg:text-[30px] flex items-center relative w-full justify-between text-white cursor-pointer"  target="_blank" >
                  {t('linkedin')}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Arrow / Arrow_Up_Right_LG">
                      <path id="Vector" d="M18.3646 5.63623H11.2939M18.3646 5.63623L18.3643 12.7073M18.3646 5.63623L5.63672 18.3642" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </g>
                  </svg>
                </a>
                <hr className="under-link w-0 bg-white h-[2px] text-white opacity-20" />
                <a className="link-underline gap-4 text-[20px] social-link lg:text-[30px] flex items-center relative w-full justify-between text-white cursor-pointer"  target="_blank" >
                  {t('github')}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Arrow / Arrow_Up_Right_LG">
                      <path id="Vector" d="M18.3646 5.63623H11.2939M18.3646 5.63623L18.3643 12.7073M18.3646 5.63623L5.63672 18.3642" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </g>
                  </svg>
                </a>
                <hr className="under-link w-0 border-white bg-white h-[1px] text-white opacity-20" />
              </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default Layout;