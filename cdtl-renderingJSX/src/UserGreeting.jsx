import PropTypes from 'prop-types';

/**
 * UserGreeting component displays a welcome message if the user is logged in,
 * otherwise, it prompts the user to log in.
 * @param {object} props - Component properties.
 * @param {boolean} props.isLoggedIn - Indicates whether the user is logged in.
 * @param {string} props.username - The username of the logged-in user.
 * @returns {JSX.Element} - JSX for rendering the component.
 */
function UserGreeting(props){
    // Define JSX elements for welcome message and login prompt
    const welcomeMsg =        
        <h2 className="welcome-msg">Welcome {props.username}</h2>;

    const loginPrompt = 
        <h2 className="login-prompt">Please log in to continue</h2>;
    
    // Render welcome message or login prompt based on isLoggedIn prop
    return (
        props.isLoggedIn ? 
            welcomeMsg :
            loginPrompt
    );
}

// Define prop types for UserGreeting component
UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool, // Indicates whether the user is logged in
    username: PropTypes.string, // The username of the logged-in user
};

// Set default values for props
UserGreeting.defaultProps = {
    isLoggedIn: false, // Default value for isLoggedIn prop
    username: "Guest", // Default value for username prop
};

export default UserGreeting;
