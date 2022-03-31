import Link from "next/link"
import style from "common/styles/Nav.module.css"

export default function BoardList(){
    return(
        <nav className={style.nav}>
            <ul>
                게시판
                <li className={style.li}> <Link href='/'>Home</Link></li>
            </ul>
        </nav>
    )
}