import React, { useEffect, useState } from 'react'

//Redux
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../store/actions/actions'

//Css
import classes from './Components.module.css'

// React Icons
import { BsSearch as SearchIcon } from 'react-icons/bs';
import { AiOutlineClear as ClearIcon } from 'react-icons/ai';


const Searchbar = () =>
{
	const [text, setText] = useState("")

	//Redux State & Actions
	const state = useSelector(state => state)
	const dispatch = useDispatch()


	const searchImages = (event) =>
	{
		setText(event.target.value)
		dispatchActionHandler(event.target.value)
	}

	const clearImages = () =>
	{
		setText("")
		dispatch(actions.setTrendingKeyword(null))
	}

	const dispatchActionHandler = (text) =>
	{
		dispatch(actions.getData(text, 10)) //Get only first 10 images
		dispatch(actions.setTrendingKeyword(text))
	}

	useEffect(() =>
	{	//Set trending keyword on searchbar
		if (state.trendingKeyword)
		setText(state.trendingKeyword)
	}, [state.trendingKeyword])


	return (
		<div className = {classes.SearchBar}>
			
			<SearchIcon className={classes.Icon} onClick={() => dispatchActionHandler(text)} />
			
			<input
				placeholder="Search yours.."
				value={text}
				onChange={searchImages}
			/>	

			{
				text !== ""
				? <ClearIcon className={classes.ClearIcon} onClick={clearImages}/>
				: null
			}
			
		</div>
	)
}

export default Searchbar;
