import React, { useState, useEffect, useCallback, useRef } from "react"; 
import "../styles/File.css";
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ImageIcon from '@material-ui/icons/Image';
import FileOptions from "./FileOptions";
import { Button, IconButton } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import PrintIcon from '@material-ui/icons/Print';
import GetAppIcon from '@material-ui/icons/GetApp';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import RemoveIcon from '@material-ui/icons/Remove';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import AddIcon from '@material-ui/icons/Add';
import OpenFile from "./OpenFile";

const File = ({file, id, userId}) => {

	const [selectedFile, setSelectedFile] = useState('');
	
	useEffect(() => {
		if (selectedFile.length > 0) {
			const modal = document.querySelector(`.${selectedFile}`)

			window.onclick = (e) => {
	   			modal.style.display = "none";

	   			setSelectedFile('');
			}

			window.oncontextmenu = (e) => {
	   			modal.style.display = "none";
	   			setSelectedFile('');
			}	
		}
	}, [selectedFile])

	const [fileType, setFileType] = useState('');

	useEffect(() => {
		const extension = file.caption.substring(file.caption.lastIndexOf('.') + 1);
		switch (extension) {
			case 'jpg':
				setFileType('image');
				break;
			case 'png':
				setFileType('image');
				break;
			case 'jpeg':
				setFileType('image');
				break;
			case 'tif':
				setFileType('image');
				break;
			case 'tiff':
				setFileType('image');
				break;
			case 'gif':
				setFileType('image');
				break;
			case 'eps':
				setFileType('image');
				break;
			case 'raw':
				setFileType('image');
				break;
			case 'cr2':
				setFileType('image');
				break;
			case 'nef':
				setFileType('image');
				break;
			case 'orf':
				setFileType('image');
				break;
			case 'sr2':
				setFileType('image');
				break;
			case 'bmp':
				setFileType('image');
				break;
			default:
				setFileType('unknown');
				break;
		}
	}, [])
	
	const openFileOptions = (id) => {
		const fileOptions = document.querySelector(`.${id}`);

		fileOptions.style.display = "block";
		setSelectedFile(id);

	}

	const getReadableFileSizeString = (fileSizeInBytes) => {
		let i = -1;
		const byteUnits = ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

		do {
			fileSizeInBytes = fileSizeInBytes / 1024;
			i++;
		} while (fileSizeInBytes > 1024);

		return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i]
	}

	const [fileId, setFileId] = useState('');
	const [openFile, setOpenFile] = useState(false);

	const showFile = (id) => {
		const lastChar = id.charAt(id.length - 1);
		if (lastChar === '2') {
			setFileId(id.slice(0, -1))
		} else {
			setFileId(id);
		}
		setOpenFile(true)
	}

	const wrapperSetParentState = useCallback(val => {
		setOpenFile(val)
	}, [setOpenFile])

	return (
		<div
		className="file" 
		onContextMenu={(e) => { e.preventDefault(); openFileOptions(id)}}
		onDoubleClick={() => showFile(id)}>
			<img className="file__img" style={{display: fileType === 'image' ? "block" : "none"}} src={file.fileUrl} alt=""/>
			<div className="file__fileIconContainer" style={{display: fileType !== 'image' ? "flex" : "none"}}>
				<InsertDriveFileIcon className="file__fileIcon" />
			</div>
			<div className="file__bottom">
				<p className="file__bottom--name"> <ImageIcon className="file__bottom--imgIcon" /> {file.caption} </p>
				<p> {getReadableFileSizeString(file.size)} </p>
			</div>
			<FileOptions name={id} selectedFile={selectedFile}/>

			{
				
				openFile ? <OpenFile userId={userId} openFile={openFile} setParentState={wrapperSetParentState} classes={id} fileId={fileId}/> : ""

			}
		</div>
	)
}

export default File;