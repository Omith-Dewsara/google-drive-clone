import React from "react";
import "../styles/NavBar.css";
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { IconButton } from '@material-ui/core';

const NavBar = ({userPfp}) => {
	return (
		<div className="navBar">
			<img className="navBar__mainIcon" style={{width: "40px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_(2020).svg/1200px-Google_Drive_icon_(2020).svg.png" alt="Google Drive"/>
			<p className="navBar__mainTitle"> Drive </p>


			<div className="navBar__searchConatiner">
				<div className="navBar__search">
					<IconButton className="navBar__search--icon">
						<SearchIcon />
					</IconButton>
					<input type="text" placeholder="Search Drive"/>
				</div>
			</div>
			<div className="navBar__icons">
				<span className="navBar__icons--first">
					<IconButton>
						<HelpOutlineIcon />
					</IconButton>
					<IconButton>
						<SettingsIcon />
					</IconButton>
				</span>
				<span>
					<IconButton>
						<AppsIcon />
					</IconButton>
					<IconButton>
						<img style={{width: "40px", borderRadius: "50%"}} src={userPfp} />
					</IconButton>
				</span>
			</div>
		</div>
	)
}

export default NavBar;