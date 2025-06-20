import Button from './Button'
import Link from 'next/link'
import styles from "../page.module.css";

export default function MenuCard(props) {

    return (
        <article className='flex flex-col border border-2 border-(--fourthColor) rounded-lg m-2 p-2 w-[90%] max-w-[500px]'>
            <div className="flex flex-row gap-2 p-2 w-full">
                <p className="flex flex-col justify-start mr-2 p-3 size-fit border rounded-lg border-(--secondColor) bg-(--firstColor) text-4xl">
                    {props.image}
                </p>
                <div>
                    <h3 className="font-bold mb-2 text-lg">
                        {props.dishName}
                    </h3>
                    <p className='italic'>
                        {props.dishDescription}
                    </p>
                </div>
            </div>
            <div className='flex flex row justify-end'>
                <Link href="../preparation">
                    <Button
                        text="Commander"
                        onClick={props.handleClick}
                        classe="p-2 pl-4 pr-4 rounded-lg bg-(--fourthColor) font-bold text-(--firstColor) hover:translate-0.5" />
                </Link>
            </div>
        </article>
    )
}