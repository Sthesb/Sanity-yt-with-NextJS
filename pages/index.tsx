import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import { sanityClient, imageUrl } from '../sanity';
import { Post } from '../post';
import Link from 'next/link';


interface Props {
  posts: [Post];
}

function Home({ posts }: Props) {
  console.log(posts);
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Meduim Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className='flex justify-between items-center bg-yellow-400 border-y border-black py-20 '>
        <div className='px-10 space-y-5'>
          <h1 className='text-6xl max-w-xl font-serif'><span className='underline decoration-black decoration-4'>Meduim</span> is a place to write, read and connect</h1>
          <h2>It's easy and free to post your thinking on any topic and connect with mlllions of readers</h2>
        </div>
        <img src="https://cdn.worldvectorlogo.com/logos/medium-1.svg" className='hidden md:inline-flex md:h-32 lg:h-52 px-10' />

      </div>

      {/* posts */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 lg:p-6'>
        {
          posts.map(post => {
            return (
              <Link key={post._id} href={`/post/${ post.slug.current }`}>
                <div className='border rounded-lg  group cursor-pointer overflow-hidden'>
                    <img src={imageUrl(post.mainImage).url()} className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-out' />
                    <div className='flex justify-between p-5 bg-white'>
                      <div>
                        <p>{post.title}</p>
                        <p>{post.description} by {post.author.name}</p>
                      </div>
                      <img className='h-12 w-12 rounded-full' src={imageUrl(post.author.image).url()}  />
                    </div>
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  );
}

export default Home

export const getServerSideProps = async() => {
  const query = `
  *[_type == 'post'] {
    _id,
    title,
    slug,
    author -> {
     name,
     image
    },
    description,
    mainImage,
    body
  }`;

  const posts = await sanityClient.fetch(query)
  return {
    props: {
      posts
    }
  }
}