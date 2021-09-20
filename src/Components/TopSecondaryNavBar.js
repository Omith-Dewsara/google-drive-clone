import React from "react";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import StorageIcon from '@material-ui/icons/Storage';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import "../styles/TopSecondaryNavBar.css";
import { IconButton } from '@material-ui/core';

const TopSecondaryNavBar = () => {
	return (
		<div className="topSeconadryNavBar">
			<div className="topSeconadryNavBar__header">
				<p> My Drive </p>
				<ArrowDropDownIcon />
			</div>
			<div className="topSeconadryNavBar__footer">
				<IconButton className="topSeconadryNavBar__footer__icon">
					<StorageIcon />
				</IconButton>
				<IconButton className="topSeconadryNavBar__footer__icon">
					<InfoOutlinedIcon />
				</IconButton>
			</div>
		</div>
	)
}

export default TopSecondaryNavBar;