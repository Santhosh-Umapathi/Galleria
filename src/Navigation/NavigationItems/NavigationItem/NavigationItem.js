import React from 'react'
//React Router
import { NavLink } from 'react-router-dom'
//Css
import classes from './NavigationItem.module.css'


const NavigationItem = (props) =>
{
	return (
		<li className={classes.NavigationItem}>
			<NavLink exact to = {props.link} activeClassName = {classes.active}>
				{props.children}
			</NavLink>
		</li>
	)
}


export default NavigationItem;