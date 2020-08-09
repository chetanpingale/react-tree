import React, {useState} from "react";
import CaretRight from "../icons/caretRight";
import CaretDown from "../icons/caretDown";

import './collapsePanel.css';

const CollapsePanel = (props) => {
    const [isHidden, setHide] = useState(props.hide || true);

    const handleClick = () => {
        setHide(!isHidden);
    }

    return (
        <>
            <div className='collapse-panel'>
                <div id='collapse-panel' className='collapse-panel-icon' onClick={handleClick}>
                    {!isHidden ? <CaretDown color='#3657CF'/> : <CaretRight color='#3657CF' />}
                    <label
                        className={`collapse-panel-title ${props.selected ? 'active': ''}`}
                        onClick={(e) => props.onTreeNodeClick(e, props.treeData)}
                    >
                        {props.header}
                    </label>
                </div>
            </div>
            {
                !isHidden ? props.children : null
            }
        </>
    )
}

export default CollapsePanel;