import React, { useState, useEffect } from "react";
import "../styles/SideBar.css";
import AddIcon from '@material-ui/icons/Add';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import { Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import FolderIcon from '@material-ui/icons/Folder';
import { db, storage } from "../firebase";
import firebase from "firebase";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));



const SideBar = ({userId}) => {

	const [section, setSection] = useState('myDrive');

	const changeSection = (sectionName) => {
		setSection(sectionName)
	}

	const classes = useStyles();
	// getModalStyle is not a pure function, we roll the style only on the first render
	const [modalStyle] = useState(getModalStyle);
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const [uploading, setUploading] = useState('');

	const uploadFile = (e) => {	
			setUploading('true');
			handleClose();
  	  storage.ref(`files/${userId}/${e.target.files[0].name}`).put(e.target.files[0]).then(snapshot => {
			  storage.ref(`files/${userId}`).child(e.target.files[0].name).getDownloadURL().then(url => {
			  	db.collection(`${userId}`).add({
			  		timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			  		caption: e.target.files[0].name,
			  		fileUrl: url,
			  		size: snapshot._delegate.bytesTransferred
			  	}).then(() => {
			  		setUploading('false');
			  	})
		 		})
		  })
}
		
	useEffect(() => {
		const uploadingMsg = document.querySelector(".rightSideBar__uploadingMsg")
		if (uploading === 'true') {
			uploadingMsg.classList.toggle("rightSideBar__activeUploadingMsg");
		} else if (uploading === 'false'){
			uploadingMsg.classList.toggle("rightSideBar__activeUploadingMsg");
		}

		const closeUploadingMsgIcon = document.querySelector(".rightSideBar__uploadingMsg--closeIcon");
		closeUploadingMsgIcon.addEventListener("click", () => {
			uploadingMsg.classList.toggle("rightSideBar__activeUploadingMsg")
		})
	}, [uploading])

	const body = (
    <div className={`${classes.paper} addFilesModal`}>
    	<div>
    		<CreateNewFolderIcon className="addFilesModal__icon"/>
    		<input type="file" className="addModal__file" placeholder="hello" onChange={uploadFile}/>
    		<div> Folder </div>
    	</div>
    	<hr />
    	<div>
    		<CloudUploadIcon className="addFilesModal__icon" />
    		<div> File upload </div>
    	</div>

    	<div>
    		<FolderIcon className="addFilesModal__icon" />
    		<div> Folder Upload </div>
    	</div>
    </div>
  );

	return (
		<div className="sideBar">
			
			<div className="sideBar__addFileModal" onClose={handleOpen}>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="simple-modal-title"
					aria-describedby="simple-modal-description"
				>
			        {body}
		    	</Modal>
    		</div>

			<div className="sideBar__header">
				<div className="sideBar__header--addIcon" onClick={handleOpen}>
					<AddIcon className="sideBar__header--addIcon--icon" />
					<p> New </p>
					
				</div>
			</div>
			<div className="sideBar__main">
				<div className={section === 'myDrive' ? "sideBar__main__activeSection" : ""} onClick={() => changeSection('myDrive')}>
					<ArrowRightIcon />
					<InsertDriveFileIcon />
					<p> My Drive </p>
				</div>
				<div 
				className={section === 'computers' ? "sideBar__main__activeSection" : ""} 
				onClick={() => changeSection('computers')}>
					<ArrowRightIcon />
					<ImportantDevicesIcon />
					<p> Computers </p>
				</div>
				<div
				className={section === 'sharedWithMe' ? "sideBar__main--withoutArrow--child sideBar__main__activeSection" : "sideBar__main--withoutArrow--child"} 
				onClick={() => changeSection('sharedWithMe')}>
					<PeopleAltIcon />
					<p> Shared with me </p>
 				</div>
 				<div 
				className={section === 'recent' ? "sideBar__main--withoutArrow--child sideBar__main__activeSection" : "sideBar__main--withoutArrow--child"} 
 				onClick={() => changeSection('recent')}>
 					<QueryBuilderIcon />
 					<p> Recent </p>
 				</div>
 				<div
				className={section === 'starred' ? "sideBar__main--withoutArrow--child sideBar__main__activeSection" : "sideBar__main--withoutArrow--child"} 
 				onClick={() => changeSection('starred')}>
 					<StarOutlineIcon />
 					<p> Starred </p>
 				</div>
 				<div 
				className={section === 'trash' ? "sideBar__main--withoutArrow--child sideBar__main__activeSection" : "sideBar__main--withoutArrow--child"} 
 				onClick={() => changeSection('trash')}>
 					<DeleteOutlineIcon />
 					<p> Trash </p>
 				</div>
			</div>
			
			<hr />

			<div className="sideBar__footer">
				<div className="sideBar__footer--withoutWrroe--child">
					<CloudQueueIcon />
					<p> Storage </p>
				</div>

				<div className="sideBar__footer__storageDetails">
					<div> </div>
					<p> 0 bytes of 15GB used </p>
				</div>

				<Button className="sideBar__footer__button">
					Buy Storage
				</Button>
			</div>
		</div>
	)
}

export default SideBar;