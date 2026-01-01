import Container from "@/components/layout/Container";
import GithubSvg from "@/icons/github.svg";
import MoonSvg from "@/icons/moon.svg";

export default function Footer() {
  return (
    <div className=''>
      <div className='mt-20 py-20 border-y border-neutral-800 text-white '>
        <Container>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-11 gap-8 lg:gap-0 w-[95%] mx-auto lg:w-full'>
            <div className='flex flex-col gap-4 lg:col-span-2'>
              <h1 className='font-semibold'>Company</h1>
              <li className='list-none fontlight font-normal hover:!text-white'>
                Enterprise
              </li>
              <li className='list-none fontlight font-normal hover:!text-white'>
                About
              </li>
              <li className='list-none fontlight font-normal hover:!text-white'>
                Terms
              </li>
              <li className='list-none fontlight font-normal hover:!text-white'>
                Privacy
              </li>
            </div>

            <div className='flex flex-col gap-4 lg:col-span-2'>
              <h1 className='font-semibold'>Product</h1>
              <li className='list-none fontlight font-normal hover:!text-white'>
                Customization
              </li>
              <li className='list-none fontlight font-normal hover:!text-white'>
                Security
              </li>
              <li className='list-none fontlight font-normal hover:!text-white'>
                Customers
              </li>
              <li className='list-none fontlight font-normal hover:!text-white'>
                Changelog
              </li>
            </div>
            <div className='flex flex-col gap-4 lg:col-span-2'>
              <h1 className='font-semibold'>Docs</h1>
              <li className='list-none fontlight font-normal hover:!text-white'>
                Introduction
              </li>
              <li className='list-none fontlight font-normal hover:!text-white'>
                Installation
              </li>
              <li className='list-none fontlight font-normal hover:!text-white'>
                Components
              </li>
              <li className='list-none fontlight font-normal hover:!text-white'>
                Code Blocks
              </li>
            </div>

            <div className='flex flex-col gap-4 lg:col-span-5'>
              <label className='font-semibold' htmlFor=''>
                Subscribe to our newsletter
              </label>
              <input
                className='border px-4 py-2 rounded-full w-[400px]  border-neutral-800 '
                type='text'
                placeholder='janedoe@example.com'
              />
              <button className='py-1.5 px-5 rounded-full bg-white text-black w-fit'>
                Subscibe
              </button>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className='text-white flex justify-between items-center flex-col sm:flex-row'>
          <p className='fontlight '>
            Built by mickasmt. Hosted on Vercel. Illustrations by Popsy
          </p>
          <div>
            <div className=' flex gap-4 items-center justify-end px-7 my-7 '>
              <GithubSvg className="size-6" />

             <MoonSvg />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
