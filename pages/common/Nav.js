import Link from "next/link"
import style from "./styles/Nav.module.css"

export default function Nav(){
    return(
        <nav className={style.nav}>
            <ul>
                <li className={style.li}> <Link href='/'>Home</Link></li>
                <li className={style.li}> <Link href='/admin/dashboard'>dashboard</Link></li>
                <li className={style.li}> <Link href='/basic/basic-list'>basic</Link></li>
                <li className={style.li}> <Link href='/board/board'>게시글등록</Link></li>
                <li className={style.li}> <Link href='/board/board-list'>게시글목록</Link></li>
                <li className={style.li}> <Link href='/game/game-list'>게임목록</Link></li>
                <li className={style.li}> <Link href='/game/team'>팀등록</Link></li>
                <li className={style.li}> <Link href='/game/team-list'>팀목록</Link></li>
                <li className={style.li}> <Link href='/todo/todo'>스케줄등록</Link></li>
                <li className={style.li}> <Link href='/todo/todo-list'>스케줄목록</Link></li>
                <li className={style.li}> <Link href='/todo/todo-list2'>스케줄목록2</Link></li>
                <li className={style.li}> <Link href='/user/join'>회원가입</Link></li>
                <li className={style.li}> <Link href='/user/login'>로그인</Link></li>
                <li className={style.li}> <Link href='/user/users-list'>사용자목록</Link></li>
            </ul>
        </nav>
    )
}
