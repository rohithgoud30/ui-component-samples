import Image from 'next/image'

export default function Home() {
  return (
    <div class='max-w-xl mx-auto mt-lg'>
      <div class='md:text-center mb-lg pb-xs flex items-center justify-center'>
        <a class='block w-full' target='_blank' href='http://pplx.ai/series-b'>
          <div class='group w-full'>
            <div class='overflow-hidden rounded-full relative duration-200 transition-all border-2 border-background dark:border-backgroundDark hover:ring-2 ring-offsetPlus dark:ring-offsetPlusDark'>
              <div class='cursor-pointer px-md py-md h-[100px] md:h-[190px] relative'>
                <div class="absolute bg-[url('/galaxy.png')] group-hover:saturate-100 inset-0 bg-cover bg-bottom group-hover:bg-center group-hover:scale-100 scale-125 transition-all duration-1000"></div>
                <div class='flex h-full flex-col justify-center items-center'>
                  <div class='drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]'></div>
                  <div class='flex flex-col text-center'>
                    <div class='text-center group-hover:scale-100 scale-110 transition-all duration-1000 white font-sans text-base text-white selection:bg-superDuper selection:text-textMain'>
                      <span class='font-serif text-3xl md:text-5xl tracking-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]'>
                        Our Mission Continues
                      </span>
                    </div>
                    <div class='relative tracking-widest text-sm font-semibold !font-mono uppercase mt-sm text-xs drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] white font-sans text-base text-white selection:bg-superDuper selection:text-textMain'>
                      Announcing Our Series B Funding
                    </div>
                  </div>
                </div>
              </div>
              <div class='shadow-[inset_0_-2px_4px_rgba(0,0,0,0.2)] inset-0 absolute cursor-pointer rounded-full'></div>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}
