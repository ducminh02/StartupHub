import { cn, formatDate } from "@/lib/utils";
import { Author, Startup } from '@/sanity/types';
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from './ui/button';
import { Skeleton } from './ui/skeleton';

export type StartupTypeCard = Omit<Startup, 'author'> & {author?: Author}

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
    const {_createdAt, views, author, title, category,
     _id, image, description } = post

    console.log("Raw date string:", _createdAt);
    console.log("Formatted date:", formatDate(_createdAt));

    return (
        <li className="startup-card group">
            <div className="flex-between">
            <p className="startup_card_date">
                {formatDate(_createdAt)}
            </p>
                <div className='flex gap-1.5'>
                    <EyeIcon className='size-6 text-primary'/>
                    <span className='text-16-me'>{views}</span>
                    
                </div>
            </div>

            <div className="flex-between mt-5 gap-5">
                <div className="flex-1">
                    <Link href={`/user/${author?._id}`}>
                        <p className='text-16-medium line-clamp-1'>{author?.name} </p>
                    </Link>
                    <Link href={`/startup/${_id}`}>
                        <h3 className="text-26-semibold line-clamp-1">{title}</h3>
                    </Link>
                </div>
                <Link href={`user/${author?._id}`}>
                   <Image src={author?.image || 'https://placehold.co/48x48'} alt={author?.name || 'placeholder'} 
                   width={48} height={48} className='rounded-full' />
                </Link>
            </div>

            <Link href={`/?query=${category?.toLocaleLowerCase()}`}>
                <p className='startup-card_desc'>
                    {description}
                </p>
                <Image 
                    src={image || 'https://placehold.co/400x300'} 
                    alt='placeholder' 
                    className='startup-card_img'
                    width={400}
                    height={300}
                    style={{ objectFit: 'cover' }}
                />
            </Link>

            <Button className='flex-between gap-3 mt-5'>
                <Link href={`/startup/${_id}`}>
                    Details
                </Link>
            </Button>
        </li>
    );
};

export const StartupCardSkeleton = () => {
    return (<>
        {[0, 1, 2, 3,4 ].map((index : number) => (
            <li key={cn('skeleton', index)}>
                <Skeleton className='startup-card_skeleton' />
            </li>
        ))}
    </>)
}

export default StartupCard;
