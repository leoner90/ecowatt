
import './HomePageProjects.scss';
function HomePageProjects (props) {
    return (
        <div className='homePageProjectWrapper'  style={{backgroundImage: 'url("./img/'+ props.imgName + '"'}}>
            <h4>{props.header}</h4>
            <h4>{props.bodyText}</h4>
        </div>
    )
}

export default HomePageProjects;