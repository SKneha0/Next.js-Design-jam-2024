
import Benner from '../benner'
import { client } from '@/sanity/lib/client';
import Count from '@/app/shopdetails/count'
export default async function page({

    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const slug = (await params).slug
    const product = await client.fetch(`*[_type == "food" && slug.current == $slug][0]`, { slug })
    
    if(product){
      return (
        <div>
        <Benner />
           <Count product={product}/>
        </div>
      )}
      else{
         return <div className='text-5xl text-white'>Page Not Found</div>
      }
      }