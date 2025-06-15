import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'

export default function MenuCard(props) {

    return (
        <article>
            <div>
                <p>
                    {props.image}
                </p>
                <div>
                    <h3>
                        {props.dishName}
                    </h3>
                    <p>
                        {props.dishDescription}
                    </p>
                </div>
            </div>
            <div>
                <Link href="../preparation">
                    <Button text="commander" onClick={props.handleClick} />
                </Link>
            </div>
        </article>
    )
}