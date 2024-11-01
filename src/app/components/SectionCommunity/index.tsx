'use client'
import { useState } from 'react';
import Image from 'next/image'
import Avatar from '@/app/assets/avatar1.svg'
import ImageCommunity from '@/app/assets/ImageCommunity1.svg'

import { BiLike, BiSolidLike } from "react-icons/bi";
import { IoStarSharp } from "react-icons/io5"
import { CiShare2 } from "react-icons/ci"

export const CardCommunity = () => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikeCount] = useState(2);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(prevCount => prevCount + (liked ? -1 : 1))
  }

  return (
    <section className='grid grid-cols-subgrid'>
      <div className='col-start-1 col-end-6 px-8 max-w-lg pt-[59px] pb-[24px] rounded-2xl shadow-[0px_20px_52px_-26px_rgba(0,0,0,0.1)]'>
        <div className='flex gap-8'>
          <div>
            <Image
              src={Avatar}
              alt="Avatar"
              className='rounded-full'
            />
          </div>
          <div>
            <div className='gap-y-3'>
              <h2 className='text-2xl font-semibold'>
                Spaghetti Bolognesse
              </h2>
              <p className='text-base font-light text-zinc-400'>
                Lady Rudy
              </p>
            </div>
          </div>
        </div>
        <div className='flex pt-[30px] pb-4'>
          <IoStarSharp color='#FFC567' size={20} />
          <IoStarSharp color='#FFC567' size={20} />
          <IoStarSharp color='#FFC567' size={20} />
          <IoStarSharp color='#FFC567' size={20} />
          <IoStarSharp color='#FFC567' size={20} />
          <IoStarSharp color='#FFC567' size={20} />
        </div>
        <p className='text-base font-light'>
          I have to say, your Spaghetti Bolognese recipe is nothing short of amazing!. I ve always been a fan of italian cuisine, but Iwas a bit intimidated by the idea of making this classic at home.
        </p>
        <Image
          className='pt-5 pb-7'
          src={ImageCommunity}
          alt="Imagem do prato Spaghetti Bolognese"
        />
        <div className='flex gap-6'>
          <button className='flex justify-center items-center gap-2' onClick={handleLike}>
            {liked ? <BiSolidLike size={25} /> : <BiLike size={25} />}
            <span className='text-xl'>{likesCount}</span>
          </button>
          <button className='flex justify-center items-center gap-2'>
            <CiShare2 size={28} />
            <span className='text-xl'>Share</span>
          </button>
        </div>
      </div>
    </section>
  )
}
