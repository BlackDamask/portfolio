import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../App.css';

function Minesweeper() {
  const { i18n, t } = useTranslation();
  const overlayRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLAnchorElement>(null);
  const nameCharsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const infoDivRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const selectRef = useRef<HTMLDivElement>(null); // Add ref for select

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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
            if (overlayRef.current) overlayRef.current.style.display = 'none';
          }
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

    // Scroll-triggered animation for info div
    if (infoDivRef.current) {
      gsap.fromTo(
        infoDivRef.current,
        { x: -1020, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 2.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: infoDivRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Scroll-triggered animation for image
    if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { x: 1020, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 2.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imgRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

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
        <div ref={selectRef} className="absolute top-0 right-0 z-[10] mx-[20px] lg:mx-[40px] my-[20px]">
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
        <nav className='absolute px-[30px] md:px-[60px] py-[30px] top-0 left-0 text-white'>
          <a href='/' ref={nameRef} className='text-[20px] lg:text-[24px] xl:text-[26px] 2xl:text-[32px] font-[300] text-white text-heading'>
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
        <main className='w-full my-[150px] md:my-[200px] px-[30px] md:px-[60px]'>
          <section className='flex flex-col gap-14 md:gap-6 lg:flex-row min-h-[80vh]'>
            <div ref={infoDivRef} className='lg:w-1/3 lg:fixed flex flex-col gap-[20px]'>
                <h2 className='text-white project-name leading-[100%] font-medium text-[30px] sm:text-[40px] lg:text-[37px] xl:text-[55px] 2xl:text-[65px] whitespace-nowrap uppercase'>Minesweeper battle</h2>
                <div className="flex items-center flex-wrap gap-[6px] group">
                    <span className='tag-primary rounded-full border border-white text-white uppercase px-3 group-hover:opacity-50 transition hover:!opacity-100'>
                      Front-end
                    </span>
                    <span className='tag-primary rounded-full border border-white text-white uppercase px-3 group-hover:opacity-50 transition hover:!opacity-100'>
                      Back-end
                    </span>
                    <span className='tag-primary rounded-full border border-white text-white uppercase px-3 group-hover:opacity-50 transition hover:!opacity-100'>
                      Websockets
                    </span>
                    <span className='tag-primary rounded-full border border-white text-white uppercase px-3 group-hover:opacity-50 transition hover:!opacity-100'>
                      Aws
                    </span>
                </div>
                <p className='text-white project-desc text-opacity-60'>
                    {t('minesweeperDesc')}
                </p>
                    <a href="http://minesweeeper.xyz" className='text-white flex flex-col justify-center gap-3 mt-6 md:mt-10 link-underline relative w-fit h-10'>
                        <span className='flex'>
                            {t('minesweeperLink')}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Arrow / Arrow_Up_Right_LG"><path id="Vector" d="M18.3646 5.63623H11.2939M18.3646 5.63623L18.3643 12.7073M18.3646 5.63623L5.63672 18.3642" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
                        </span>
                        <hr className="under-link w-0 border-white bg-white h-[1px] text-white opacity-20" />
                    </a>
            </div>
            <img ref={imgRef} src="/minesweeper-full.png" alt="arrow" className='w-full lg:w-1/2 ml-auto' />
          </section>
        </main>
      </div>
    </>
  )
}

export default Minesweeper;