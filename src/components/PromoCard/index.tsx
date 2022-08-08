import styles from './PromoCard.module.scss'
import Logo from '../../assets/produto-02 1.svg'

export default function PromoCard() {
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <img src={Logo} alt="" />
            </div>
            <div>
                <h2>Cordyline fruticosa</h2>
                <h4>R$ 20,00</h4>

                <span>Comprar -{'>'}</span>
            </div>
        </div>
    )
}