import PlantOne from '../../assets/plant_one.svg'
import PromoCard from '../../components/PromoCard'
import styles from './Home.module.scss'

export default function Home() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div>
                        <h2 className={styles.home}>Sua casa com as</h2>
                        <h1 className={styles.principal}>melhores <br /> plantas</h1>
                        <span className={styles.small}>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</span>
                    </div>
                    <div className={styles['email-container']}>
                        <input type="email" placeholder='Insira seu e-mail' className={styles.email}/>
                        <button className={styles['send-button']}>Assinar newsletter</button>
                    </div>
                </div>
                <div className={styles.image}>
                    <img src={PlantOne} alt="" />
                </div>
            </div>
            <PromoCard />
        </div>
    )
}