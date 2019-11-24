import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import ArticleEditor from 'Components/common/ArticleEditor/ArticleEditor';

const ArticleCreate = () => {
	const history = useHistory();

	const submit = (article) => {
		console.log(article);
	}

	const cancel = () => {
		const answer = window.confirm("確定放棄修改？")
		if (answer) {
			history.replace('/');
		}
	}

	return(
		<div>
			<ArticleEditor submit={submit} cancel={cancel}/>
		</div>
	);
};

export default ArticleCreate;
