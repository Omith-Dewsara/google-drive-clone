import React, { useState, useEffect } from "react";
import "../styles/FilesView.css";
import File from "./File";
import { db } from "../firebase";
import "../styles/File.css";
import ImageIcon from '@material-ui/icons/Image';
import FileOptions from "./FileOptions";

const FilesView = ({userId}) => {

	const [files, setFiles] = useState([]);

	const openFileOptions = (e) => {
		e.preventDefault();

		const fileOptions = document.querySelector(".fileOptions");
		fileOptions.style.display = "block";
	}

	useEffect(() => {
		db.collection(userId).orderBy("timestamp", "desc").onSnapshot((snapshot) => {
			setFiles(snapshot.docs.map(doc => ({id: doc.id, file: doc.data()})))
		})	
	}, []);


	return (
		<div className="filesView">	
			<div className="filesView__title"> Suggested </div>
			<div className="filesView__files">	
				{
					files.slice(0, 5).map(({ id, file }) => ( 	
							<File key={id} file={file} id={id} userId={userId}/>
						)
					)
				}
			</div>

			<div className="filesView__title"> Folders </div>

			<div className="filesView__title"> Files </div>

			<div className="filesView__files">	
				{
					files.map(({ id, file }) => ( 	
							<File key={id + "2"} file={file} id={id + "2"} userId={userId}/>
						)
					)
				}
			</div>
		</div>
	)
}

export default FilesView;