import Link from "next/link"
import style from "./styles/Nav.module.css"

export default function Nav(){
    return(
        <nav className={style.nav}>
            <ul>
                <li className={style.li}> <Link href='/'>Home</Link></li>
                <li className={style.li}> <Link href='/admin/dashboard'>dashboard</Link></li>
                <li className={style.li}> <Link href='/basic/basic-list'>basic</Link></li>
                <li className={style.li}> <Link href='/board/board-list'>board</Link></li>
                <li className={style.li}> <Link href='/board/board-form'>BoardForm</Link></li>
                <li className={style.li}> <Link href='/game/game-list'>gameList</Link></li>
                <li className={style.li}> <Link href='/game/team-list'>teamList</Link></li>
                <li className={style.li}> <Link href='/game/team-form'>teamForm</Link></li>
                <li className={style.li}> <Link href='/todo/todo-list'>todoList</Link></li>
                <li className={style.li}> <Link href='/user/sign-in'>signin</Link></li>
                <li className={style.li}> <Link href='/user/sign-up'>signup</Link></li>
            </ul>
        </nav>
    )
}
