import MaxWidthWrapper  from '@/components/MaxWidthWrapper'
import Link from 'next/link'
import {Button, buttonVariants} from '@/components/ui/button' 
import {ArrowDownToLine, CheckCircle,Leaf  } from 'lucide-react'

// constant feature 
const perks = [
  {
  name:"Delivery",
  icon:ArrowDownToLine,
  description:"Get your  perfume delivered today"
  },
  {
    name:"Guaranteed Quality",
    icon:CheckCircle,
    description:"Every perfume on our platform is verified by our team to ensure our highest quality"
  },
  {
    name:"For the Planet",
    icon:Leaf,
    description:"we've pledge 1% of sales to the preservation and restoration of nature"
  },
]

export default function Home() {
  return (
    //  <> as a prequisite if more then one main component
    <> 
      <MaxWidthWrapper>
        <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
          <h1 className='text-4xl font-bold tracking-tight text-cyan-800 sm:text-6xl'>
            Your Merchant for Best Similar Perfume{" "} 
            <span className='text-blue-950'>Digital Assets</span>
            .</h1>
          <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
            Welcome to HUME Perfumery, every perfume in our platform is 
            validated by our team or community to ensure our best quality
          </p>
          <div className='mt-6 text-lg max-w-prose text-muted-foreground'>
            <Link href='/products' className={buttonVariants()}>Browse Perfume</Link>
            <Button variant='link'>Our quality promise &rarr;</Button>
          </div>
        </div>

      {/*TODO: List of Perfume  */}

      </MaxWidthWrapper>

      <section className='border-t border-gray-200 bg-gray-50'>
          <MaxWidthWrapper>
            <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
              {perks.map(
                (perk) => (
                  <div
                  key={perk.name}
                  className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
                    <div className='md:flex-shrink-0 flex justify-center'>
                      <div className='h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-950'>
                        {<perk.icon className='w-1/3 h-1/3'/>}
                      </div>
                    </div>
                      <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                        <h3 className='text-base font-medium text-gray-900'>
                          {perk.name}
                        </h3>
                        <p className='mt-3 text-sm text-muted-foreground'>
                          {perk.description}
                        </p>
                      </div>
                  </div>
                )
              )}
            </div>
          </MaxWidthWrapper>
      </section>
    </>
  )
}
