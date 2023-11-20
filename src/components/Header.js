import PropTypes from 'prop-types'
import Button from './button'

const Header = ({ title, onAdd, showAdd }) => {


  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color= {showAdd ? '#78110a' : '#3f1e43'} text={showAdd ? 'Close' : 'Add' } onClick={onAdd} />
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
/*                          CSS in JS
const headingStyle = {
    color:'red',
    backgroundColor:'black',
} 
*/

export default Header

