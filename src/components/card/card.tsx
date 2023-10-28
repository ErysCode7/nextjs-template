import Image from 'next/image';

type CardProps = {
  imageUrl: string;
  title: string;
  subtitle: string;
};

const Card = ({ imageUrl, subtitle, title }: CardProps) => {
  return (
    <div className="bg-white shadow-md rounded hover:scale-[103%] transition duration-500">
      <div className="relative h-[300px] w-[300px] laptop:cursor-pointer">
        <Image src={imageUrl} alt={title} fill className="rounded" />
      </div>
      <div className="px-3 py-5 flex flex-col gap-2">
        <h2 className="text-blue-500 laptop:cursor-pointer">{title}</h2>
        <p className="text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;
