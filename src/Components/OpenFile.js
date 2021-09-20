import React, { useState, useEffect, useRef } from "react";
import { Button, IconButton } from '@material-ui/core';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import PrintIcon from '@material-ui/icons/Print';
import GetAppIcon from '@material-ui/icons/GetApp';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import RemoveIcon from '@material-ui/icons/Remove';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import AddIcon from '@material-ui/icons/Add';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ImageIcon from '@material-ui/icons/Image';
import { db } from "../firebase";

const OpenFile = ({userId, openFile, setParentState, classes, fileId}) => {

	const [fileName, setFileName] = useState('');
	const [fileUrl, setFileUrl] = useState('');
	const childRef = useRef();
	const [opened, setOpened] = useState(true);

	useEffect(() => {
		setParentState(opened);
	}, [setParentState, opened]) 

	useEffect(() => {
		db.collection(userId).doc(fileId).get().then(cred => {
			const data = cred.data();
			setFileName(data.caption);
			setFileUrl(data.fileUrl)
		})
	}, [])

	const exitFile = () => {
		setOpened(false)
	}

	let [zooming, setZooming] = useState(0);
	const [imageHeight, setImageHeight] = useState("70%");
	const [topOptions, setTopOptions] = useState(true);

	useEffect(() => {
		switch(zooming) {
			case 1:
				setImageHeight("70%");
				setTopOptions(false);
				break;
			case 2:
				setImageHeight("85%");
				break;
			case 3:
				setImageHeight("90%");
				break;
			case 0:
				setImageHeight("70%");
				setTopOptions(true);
				break;
		}
	}, [zooming])

	

	const zoomInImg = () => {
		if (zooming < 3) {
			setZooming(zooming + 1);
		}
		console.log(zooming);
		console.log(imageHeight);
	}

	const zoomOutImg = () => {
		if (zooming > -1) {
			setZooming(zooming - 1)
		}
	}

	return (
		<div className={"file__openFile " + classes} style={{padding: topOptions ? "": "30px 0px 0px 0px"}}>
				<div className="file__openFile--top" style={{display: topOptions ? "flex": "none"}}>
					<div>
						<IconButton className="file__openFile--top--backIcon" onClick={exitFile}>
						<ArrowBackIcon />
						</IconButton>
						<ImageIcon className="file__openFile--top--imageIcon"/>
						<p className="file__openFile--top--fileName"> {fileName}  </p>
					</div>
					<div>
						<Button className="file__openFile--top--button" size="small" variant="contained"> Open with <ArrowDropDownIcon />  </Button>
					</div>

					<div className="file__openFile--top--icons">
						<IconButton>
							<LibraryAddIcon />
						</IconButton>
						<IconButton>
							<PrintIcon />
						</IconButton>
						<IconButton>
							<GetAppIcon />
						</IconButton>
						<IconButton>
							<MoreVertIcon />
						</IconButton>
					</div>

				</div>
				<div className="file__openFile__image" style={{height: imageHeight}}>
					<img src={fileUrl} alt=""/>
				</div>
				<div className="file__openFile__bottom">
					<div>
						<IconButton onClick={zoomOutImg}>
							<RemoveIcon />
						</IconButton>
						<IconButton onClick={() => setZooming(0)}>
							<ZoomOutIcon />
						</IconButton>
						<IconButton onClick={zoomInImg}>
							<AddIcon  />
						</IconButton>
					</div>
				</div>
			</div>
	)
}

export default OpenFile;