import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
     <div class=" py-24 px-6 text-center dark:bg-neutral-900" style={{marginTop: '170px'}}>
          <h1 class="mt-2 mb-16 text-5xl  font-bold text-white md:text-6xl xl:text-7xl">
            The best works in graphic design <br /><span class="text-primary">for your business</span>
          </h1>
          <Link to='addnew' class="mb-2 inline-block rounded bg-blue-500 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
            data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Get started</Link>
          <Link to='/' class="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-800 dark:hover:bg-opacity-60"
            data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Learn more</Link>
        </div>
<footer
  class="bg-gray-700 text-center dark:bg-neutral-600 lg:text-left my-footer ">


  <div
    class="bg-neutral-200 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
    © 2023 Copyright:
    <a
      class="text-neutral-800 dark:text-neutral-400"
      href="https://tailwind-elements.com/"
      >Arj Gfx</a
    >
  </div>
</footer>
    </>
  )
}

export default Home
