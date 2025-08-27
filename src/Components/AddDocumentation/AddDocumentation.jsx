import React, { useState } from "react";
import documentationIcon from "../../assets/documentation.png";
import "./AddDocumentation.css";
import Header from "../Header/Header";
import PageTitle from "../PageTitle/PageTitle";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { enqueueSnackbar,closeSnackbar } from 'notistack'
const AddDocumentation = () => {
	const [content, setContent] = useState("");
	const toolbarOptions = [
		["bold", "italic", "underline", "strike"], // toggled buttons
		["blockquote", "code-block"],
		["link", "image", "video", "formula"],
		[{ size: ["small", false, "large", "huge"] }], // custom dropdown
		[{ header: [1, 2, 3, 4, 5, 6, false] }], // custom button values
		[{ font: [] }],
		[{ align: [] }],
		[{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
		[{ script: "sub" }, { script: "super" }], // superscript/subscript
		[{ indent: "-1" }, { indent: "+1" }], // outdent/indent
		[{ direction: "rtl" }], // text direction
		[{ color: [] }, { background: [] }], // dropdown with defaults from theme

		["clean"], // remove formatting button
	];

	const module = {
		toolbar: toolbarOptions,
	};

	const handleChange = (value) => {
		setContent(value);
	};
	const postNote = async () => {
		const response = await axios.post(
			"http://localhost/taskverse-backend/web/api/project-info-save?_format=json",
			{
				note_data: content,
			}
		);
		console.log(response);
	};
	return (
		<>
			<Header />
			<PageTitle
				pageTitle="<h2>Add Project Documentation</h2><p>Document your progress, streamline workflows, and build with clarity.</p>"
				illustration={documentationIcon}
			/>
			<section className="add-documentation">
				<div className="container">
					<h2>Create Project Documentation</h2>
          <input type="text" placeholder="Add title of note" />
					<ReactQuill
						modules={module}
						value={content}
						onChange={handleChange}
						theme="snow"
					/>
          <div className="action-btn">
					  <button className="save-note-btn" onClick={postNote}>Save Documentation</button>
            <button className="reset-note-btn" onClick={()=>{

              setContent("");
              enqueueSnackbar("Notebook resetted.")
            }}>Reset</button>
          </div>
				</div>
			</section>
		</>
	);
};
export default AddDocumentation;
