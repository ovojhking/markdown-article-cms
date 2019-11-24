import React, {useState} from 'react';
import CodeMirror from 'Components/common/CodeMirror/CodeMirror';
import ReactMarkdown from 'react-markdown';
import ValidatorHoc from 'Components/common/validator/validatorHoc';
import InputBase from 'Components/common/Input/InputBase';
import Tab from 'Components/common/Tab/Tab';
import {allowOnlyLowerCaseNumberDash} from 'Configs/validatorRules';

const InputValidator = ValidatorHoc(InputBase, [allowOnlyLowerCaseNumberDash]);

const ArticleEditor = (props) => {
	const [validateStatus, setValidateStatus] = useState(false);
	const [subject, setSubject] = useState(props.defaultArticle.subject);
	const [content, setContent] = useState(props.defaultArticle.content);
	const [coverPhoto, setCoverPhoto] = useState(props.defaultArticle.coverPhoto);

	const markdownChanged = (value)=>{
		setContent(value);
	};
	const onSubmit = () => {
		const data = {subject, coverPhoto: filterXSS(coverPhoto), content}
		if(validateStatus && subject !== '') {
			props.submit(data);
		} else {
			alert('請輸入正確格式的subject');
		}
	}
	const onCancel = () => {
		props.cancel();
	}

	return(
		<div>
			<label className="mr-2">Subject:</label>
			<InputValidator
				className="form-control"
				placeholder="請輸入subject"
				warning="僅可輸入小寫英文、數字、-"
				defaultValue={subject} 
				validateStatus={(value)=>setValidateStatus(value)}
				onValueChanged={(value)=>setSubject(value)}
			/>
			<label className="mt-6">Copy Photo URL: </label>
			<input 
				className="form-control"
				placeholder="請輸入封面圖片網址"
				value={coverPhoto} 
				onChange={(e)=>setCoverPhoto(e.target.value)}
			/>
			<div className="mt-6 mb-10">
				<Tab
					titleList={['write', 'preview']} 
					contentList={[
						<CodeMirror defaultValue={content} onValueChanged={markdownChanged}/>,
						<ReactMarkdown className="p-3 overflow-auto" source={content} escapeHtml={false}/>
					]}
				/>
			</div>
			<div className="fixed-bottom p-3 bg-light d-flex align-items-center justify-content-around">
				<button className="btn btn-primary" onClick={()=>onSubmit()}>Save</button>
				<button className="btn btn-secondary" onClick={()=>onCancel()}>Cancel</button>
			</div>
		</div>
	);
};

ArticleEditor.defaultProps = {
    defaultArticle: {subject: '', coverPhoto: '', content: ''},
    submit: ()=>{},
    cancel: ()=>{},
};

export default ArticleEditor;
