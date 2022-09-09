import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {

    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p> Desenvolvido por <strong>Matheus Penachioni</strong> </p>
                <p> Aulas da semana Spring React por <strong> <a href="https://www.instagram.com/devsuperior.ig">@devsuperior.ig</a> </strong> </p>
            </div>
        </header>
    )
}

export default Header