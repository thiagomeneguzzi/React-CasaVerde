import Logo  from '../../assets/logo.svg'
import styles from './Header.module.scss'

export default function Header() {
    return (
        <header className={styles.container}>
            <div>
                <img src={Logo} alt="" />
            </div>
            <ul className={styles['menu-list']}>
                <li>Como fazer</li>
                <li>Ofertas</li>
                <li>Depoimentos</li>
                <li>Vídeos</li>
                <li>Meu carrinho</li>
            </ul>
        </header>
    )
}