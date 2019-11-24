import React, {useState, useEffect, useRef} from 'react';
import "codemirror/lib/codemirror.css";
import codemirror from 'codemirror';

const CodeMirror = (props) => {
    const [codeMirrorInstance, setCodeMirrorInstance] = useState(null);
    const textareaNode = useRef(null);

    const init = () => {
        const {mode} = props;
        const codeMirrorInstance = codemirror.fromTextArea(
            textareaNode.current, {
                lineNumbers: true,
                mode,
                highlightFormatting: true
            }
        );
        codeMirrorInstance.on('change', codemirrorValueChanged);
        setCodeMirrorInstance(codeMirrorInstance);
    }

    const codemirrorValueChanged = (doc, change) => {
        const value = doc.getValue();
        props.onValueChanged(value);
    }

    useEffect(() => {
        init();
    },[]);

	return(
		<div>
            <textarea
                ref={textareaNode}
                defaultValue={props.defaultValue}
            />
		</div>
	);
};

export default CodeMirror;
