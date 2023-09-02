import {faArrowTurnRight , faEuroSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function PriceSection(props) {
 
    function fontAwesome(value, className) {
        return <FontAwesomeIcon className={className} icon={value} />
    }
    
    return (
        <div className='priceSection'>
            <div  className='priceRightSide'>
                <div  className=  'priceBlock'  >
                    <p className='priceHeader'>{fontAwesome(faArrowTurnRight, 'priceHeaderSvg')}  {props.name} </p>
                    <p className='priceItself'>No {props.price} {fontAwesome(faEuroSign, 'euroSignSvg')}   </p>
                </div>
            </div>
        </div>
    )
}

export default PriceSection;