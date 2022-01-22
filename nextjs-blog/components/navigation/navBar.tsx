import NavLink from './helpers/nav-link'
import styles from './navBar.module.scss'

export default function NavBar(currentPage) {
  return (
    <>
      <div className={styles.navBar}>
        <NavLink target="/" title="home"></NavLink>
        <NavLink target="layout-editor"></NavLink>
        <NavLink target="shop"></NavLink>
        <NavLink target="about"></NavLink>
      </div>
    </>
  )
}
