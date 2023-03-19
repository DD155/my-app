import Link from 'next/link'
import { useRouter, NextRouter } from 'next/router'

const Homepage = () => {
    const router:NextRouter = useRouter()

    const handleClick = () => {
        router.push("/docs/2/3")
    }


    return (
        <div>
            <h1> Home Page </h1>
            <Link href='/blog'>
            Blog
            </Link>
            <button onClick={handleClick}>
                Place Order
            </button>
        </div>
    )
}

export default Homepage