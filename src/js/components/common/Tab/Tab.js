import React, {useState} from 'react';
import {generateKey} from 'Libs/generateKey';

const Tab = (props) => {
    const [tabIndex, setTabIndex] = useState(0);
    const tabTitle = () => {
        const titleList = [];
        props.titleList.forEach((titleName, index) => {
            let navLinkCss = 'nav-link';
            if(index===tabIndex){
                navLinkCss += ' active';
            }
            titleList.push(
                <li className="nav-item" key={generateKey(titleName)}>
                    <span className={navLinkCss} onClick={()=>setTabIndex(index)}>
                        {titleName}
                    </span>
                </li>
            )
        });

        return(
            <ul className="nav nav-tabs">
                {titleList}
            </ul> 
        );
    }

    const tabContent = () => {
        return props.contentList.map((content, index)=>{
            let activeCss = 'd-none' 
            if( index === tabIndex ){
                activeCss = '';
            }
            return (
                <div className={activeCss} key={`${content.type.name}-${index}`}>{content}</div>
            );
        });
    }

	return(
        <div>
            {tabTitle()}
            <div className="border border-top-0 border-partial-light">
                { tabContent() }
            </div>
        </div>
	);
};

export default Tab;
