import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck } from '@fortawesome/free-solid-svg-icons'

export default function textSpliter(text, spliter) {
    let splitedText = text.split(spliter);
    let newText = splitedText.map((line, index) => {
      if(line.trim().length <= 1) { 
       return ( <article className="EmptyLine" key={index} />)
      } else {
        if (line.includes("/l")){
          line = line.replace('/l' , '')
          line = <span><FontAwesomeIcon className='textListFontAwesome' icon={faCheck} /> {line}  </span>
        }
        
        return   (<span className="newLineArticle" key={index}>{line}</span>)
      }
    })
    return newText;    
}