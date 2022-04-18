import Link from "next/link"
import styles from "./styles/Nav.module.css"

export default function Nav(){
    return(
        <nav className={styles.nav}>

        <div className={styles.dropdown}>
        <button className={styles.dropdownButton}>main</button>
          <div className={styles.dropdownContent}>
          <ul>
            <li className={styles.li}> <Link href='/'>메인</Link> </li> 
          </ul>
          </div>
        </div>

        <div className={styles.dropdown}>
        <button className={styles.dropdownButton}>basic</button>
          <div className={styles.dropdownContent}>
          <ul>
            <li className={styles.li}> <Link href='/basic/counter'>카운터</Link> </li>
            <li className={styles.li}> <Link href='/basic/calc'>계산기</Link> </li>
            <li className={styles.li}> <Link href='/basic/bmi'>BMI</Link> </li>
          </ul>
          </div>
        </div>

        <div className={styles.dropdown}>
        <button className={styles.dropdownButton}>todo</button>
          <div className={styles.dropdownContent}>
          <ul>
            <li className={styles.li}> <Link href='/todo/addTodo'>할일등록</Link> </li>
            <li className={styles.li}> <Link href='/todo/getTodos'>할일목록</Link> </li>
            <li className={styles.li}> <Link href='/todo/modifyTodo'>할일수정</Link> </li>
            <li className={styles.li}> <Link href='/todo/removeTodo'>할일삭제</Link> </li>
          </ul>
          </div>
        </div>

        <div className={styles.dropdown}>
        <button className={styles.dropdownButton}>board</button>
          <div className={styles.dropdownContent}>
          <ul>
            <li className={styles.li}> <Link href='/board/addArticle'>게시글등록</Link> </li>
            <li className={styles.li}> <Link href='/board/getArticles'>게시글목록</Link> </li>
            <li className={styles.li}> <Link href='/board/modifyArticle'>게시글수정</Link> </li>
            <li className={styles.li}> <Link href='/board/removeArticle'>게시글삭제</Link> </li>
          </ul>
          </div>
        </div>

        <div className={styles.dropdown}>
        <button className={styles.dropdownButton}>game</button>
          <div className={styles.dropdownContent}>
          <ul>
          <li className={styles.li}> <Link href='/game/addGame'>게임등록</Link> </li>
          <li className={styles.li}> <Link href='/game/getGames'>게임목록</Link> </li>
          <li className={styles.li}> <Link href='/game/modifyGame'>게임수정</Link> </li>
          <li className={styles.li}> <Link href='/game/removeGame'>게임삭제</Link> </li>
          </ul>
          </div>
        </div>

        <div className={styles.dropdown}>
        <button className={styles.dropdownButton}>team</button>
          <div className={styles.dropdownContent}>
          <ul>
          <li className={styles.li}> <Link href='/team/addTeam'>팀등록</Link> </li>
          <li className={styles.li}> <Link href='/team/getTeams'>팀목록</Link> </li>
          <li className={styles.li}> <Link href='/team/modifyTeam'>팀수정</Link> </li>
          <li className={styles.li}> <Link href='/team/removeTeam'>팀삭제</Link> </li>
          </ul>
          </div>
        </div>

        <div className={styles.dropdown}>
        <button className={styles.dropdownButton}>user</button>
          <div className={styles.dropdownContent}>
          <ul>
          <li className={styles.li}> <Link href='/user/join'>회원가입</Link> </li>
          <li className={styles.li}> <Link href='/user/login'>로그인</Link> </li>
          <li className={styles.li}> <Link href='/user/logout'>로그아웃</Link> </li>
          <li className={styles.li}> <Link href='/user/getUsers'>사용자목록</Link> </li>
          <li className={styles.li}> <Link href='/user/updateUser'>사용자수정</Link> </li>
          <li className={styles.li}> <Link href='/user/withdrawUser'>회원탈퇴</Link> </li>
          </ul>
          </div>
        </div>
      </nav>
    )
}
