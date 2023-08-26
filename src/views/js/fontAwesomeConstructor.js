import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faCheck } from '@fortawesome/free-solid-svg-icons'

export default function fontAwesome(value, className) {
  return <FontAwesomeIcon className={className} icon={value} />
}