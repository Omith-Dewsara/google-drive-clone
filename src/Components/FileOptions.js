import React, { useEffect } from "react";
import "../styles/FileOptions.css";
import VisibilityIcon from '@material-ui/icons/Visibility';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import LinkIcon from '@material-ui/icons/Link';
import FolderIcon from '@material-ui/icons/Folder';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import CreateIcon from '@material-ui/icons/Create';
import HistoryIcon from '@material-ui/icons/History';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import GetAppIcon from '@material-ui/icons/GetApp';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const FileOptions = ({name, selectedFile}) => {
	return (
		<div className={"fileOptions " + name}>
			<div>
				<VisibilityIcon />
				<div> Preview </div>
			</div>
			<div>
				<OpenInNewIcon />
				<div> Open with </div>
			</div>
				<hr />
			<div>
				<PersonAddIcon />
				<div> Share </div>
			</div>
			<div>
				<LinkIcon />
				<div> Get Link </div>
			</div>
			<div>
				<FolderIcon />
				<div> Show file location </div>
			</div>
			<div>
				<CloudQueueIcon />
				<div> Add a shortcut to Drive </div>
			</div>
			<div>
				<CreateNewFolderIcon />
				<div> Move to </div>
			</div>
			<div>
				<StarBorderIcon />
				<div> Add to starred </div>
			</div>
			<div>
				<CreateIcon />
				<div> Rename </div>
			</div>
				<hr />
			<div>
				<HistoryIcon />
				<div> Manage versions </div>
			</div>
			<div>
				<FileCopyIcon />
				<div> Make a copy </div>
			</div>
			<div>
				<ErrorOutlineIcon />
				<div> Report abuse </div>
			</div>
			<div>
				<GetAppIcon />
				<div> Download </div>
			</div>
				<hr />
			<div>
				<DeleteOutlineIcon />
				<div> Remove </div>
			</div>
			<div>
				<ThumbDownIcon />
				<div> Not a helpful suggestion </div>
			</div>
		</div>
	)
}

export default FileOptions;