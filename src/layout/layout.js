import React, {useState} from 'react'

//Prop Types
import PropTypes from 'prop-types';

//Navigation
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';

//Css
import classes from './Layout.module.css'


const Layout = (props) =>
{
	const [showSideDrawer, setShowSideDrawer] = useState(false)
	
	const backdropHandler = () => setShowSideDrawer(false)

	const toggleSidebarHandler = () => setShowSideDrawer(prevState => !prevState.showSideDrawer)

	return (
		<>
			<Toolbar clicked={toggleSidebarHandler} />
			
			<Sidedrawer show={showSideDrawer} backdropHandler={backdropHandler}/>
	
			<main className = {classes.content}>
				{props.children}
			</main>
		</>
	)
}

Layout.propTypes =
{
	children: PropTypes.any,
};

export default Layout;