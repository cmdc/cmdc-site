import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import Seo from '../components/common/seo'

const Custom500 = () => {
  return (
    <>
      <Seo />
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-2xl px-4 py-12 mx-auto sm:px-6 lg:px-12 lg:max-w-screen-2xl lg:flex lg:items-center sm:pt-16 xl:py-20 ">
          {/* Page not found */}
          <div className="flex flex-col justify-center lg:w-1/2 xl:w-2/5">
            <div className="max-w-lg">
              <p
                href="#"
                className="relative text-sm tracking-widest text-blue-800 dark:text-blue-400 uppercase"
              >
                Error 500
              </p>
              <h2 className="mt-3 text-4xl font-medium tracking-normal text-gray-900 dark:text-gray-300 md:tracking-tight lg:leading-tight md:text-5xl">
                Server Error
              </h2>
              <div>
                <p className="mt-4 text-base leading-loose text-gray-600 dark:text-gray-50">
                  Sorry, we have a problem. We are working on it.
                </p>
              </div>
              <div className="inline-block">
                <Link href="/">
                  <a className="flex items-center mt-4 text-blue-600 no-underline transition duration-300 ease-in-out sm:mt-5 hover:text-blue-500 group">
                    Go back home
                    <ArrowRightIcon className="w-5 h-5 ml-2 transition duration-300 ease-in-out group-hover:text-blue-400 group-hover:translate-x-1.5" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Custom500
