import Link from "next/link";


export default function Nav() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link nav-item">home</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/explore">
                            <a className="nav-link nav">explore</a>
                        </Link>
                    </li>
                </ul>
                <div className="nav-item ms-auto">
                    <Link href="/profile">
                        <a className="nav-link">profile</a>
                    </Link>
                </div>

            </div>


        </nav>
    )
}
