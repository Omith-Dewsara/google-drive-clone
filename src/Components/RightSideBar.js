import React from "react";
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import "../styles/RightSideBar.css";
import { IconButton } from '@material-ui/core';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import CloseIcon from '@material-ui/icons/Close';

const RightSideBar = () => {
	return (
		<div className="rightSideBar">
			<div className="rightSideBar__icons">
				<IconButton>
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_(2020).svg/1200px-Google_Calendar_icon_(2020).svg.png" alt="" />
				</IconButton>
				<IconButton>
					<img src="https://maxcdn.icons8.com/Share/icon/Logos/google_keep1600.png" alt="" />
				</IconButton>
				<IconButton>
					<img src="https://www.androidpolice.com/wp-content/uploads/2018/03/nexus2cee_new-tasks-icon.png" alt="" />
				</IconButton>
			</div>

			<div className="rightSideBar__hr"> </div>

			<IconButton className="rightSideBar__icon">
				<AddOutlinedIcon />
			</IconButton>

			<div className="rightSideBar__uploadingMsg">
				<InsertDriveFileIcon style={{fontSize: "40px", color: "#D93025"}}/>
				<div> File is uploading... </div>
				<CloseIcon className="rightSideBar__uploadingMsg--closeIcon"/>
			</div>

		</div>
	)
}

export default RightSideBar;