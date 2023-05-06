import { useSignUpMutation } from '../store/services.js'
import './css/home.scss';


function Home() {
    //<button type="button" onClick ={() =>  {ServerCall(x)}}> Server Call </button>
    //const [ServerCall, { isError, isLoading }] = useSignUpMutation();
    //let x = JSON.stringify(234234234)
    return (
        <div>
            <div className='coloredSetion' style={{backgroundImage: 'url("./img/project1.jpeg"'}}>
                <div className='HomeFirstSectionWrapper'>
                    <div className='worksWeDoSolarPanel'> 
                        <h4 className='subHeader'>Saules Paneļu Uzstādīšana</h4>
                        <div>Veicam Invertora iestatīšana un iestatījumus protokola sagatavošana.</div>
                        <div>Saules paneļu projektu pārbaudi, saules paneļu elektroinstalācijas mērijumus un parametru pārbaudi.</div>
                        <div>Kā arī veicam montāžu.</div>
                        <div>Sertificets speciālists.</div>
                    </div>
                    <div className='worksWeDoElectrical'> <h4 className='subHeader'>Elektromontažas darbi</h4></div>
                </div>
            </div>

            <div className='whiteSection'>
                2
            </div>

            <div className='coloredSetion' style={{backgroundImage: 'url("./img/project2.jpeg"'}}>
                3
            </div>

            <div className='whiteSection'>
                4
            </div>

        </div>
    )
}

export default Home;