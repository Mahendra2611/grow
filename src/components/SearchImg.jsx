import Image from 'next/image';

const SearchImg = ({ id, img, name, username }) => {
  return (
    <div className='flex flex-col justify-center items-center py-3 px-4 gap-2 rounded-xl bg-[#FFFFFF0F]'>
      <Image src={img} width={80} height={80} alt={name} />
      <h1 className='text-[12px] text-white'>{name}</h1>
      <p className='text-[8px] text-white'>{username}</p>
    </div>
  )
}

export default SearchImg;
