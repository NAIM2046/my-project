import PropTypes from 'prop-types'; // ES6
const NavBar = ( {rout}) => {
    return (
        <li  className="ml-6">
                        <a href= {rout.path}> {rout.name}</a>
                    </li>
    );
};

NavBar.propTypes ={
    rout : PropTypes.array
}
export default NavBar;