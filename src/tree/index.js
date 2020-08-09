import React from "react";
import CollapsePanel from "../collapsePanel";
import ArrowRightIcon from "../icons/arrowRight";

import './recursiveTree.css';


const FOLDER = 'folder';
const NODE = 'node';

class RecursiveTree extends React.Component {

    render() {
        // Recursive component
        const {options, onTreeNodeClick, selectedTreeNode} = this.props;
        return (
            <div className='tree'>
                {
                    options && options.map((option, index) => {
                        return <div key={index} className='sidebar-text'>
                            {
                                option.nodeType === FOLDER
                                    ? <CollapsePanel
                                        header={option.nodeName}
                                        treeData={option}
                                        onTreeNodeClick={onTreeNodeClick}
                                        selected={selectedTreeNode && selectedTreeNode.nodeId === option.nodeId}
                                    >
                                        {
                                            option.children
                                                ? <div className='sub-item'>
                                                    <RecursiveTree
                                                        options={option.children}
                                                        selectedTreeNode={selectedTreeNode}
                                                        onTreeNodeClick={onTreeNodeClick}
                                                    />
                                                </div>
                                                : null
                                        }
                                    </CollapsePanel>
                                    : null
                            }{
                            option.nodeType === NODE
                                ? <div key={index}>
                                    <ArrowRightIcon />
                                    <label
                                        className={`sidebar-title ${selectedTreeNode && selectedTreeNode.nodeId === option.nodeId ? 'active-policy': ''}`}
                                        onClick={(e) => onTreeNodeClick(e, option)}
                                    >
                                        {option.nodeName}
                                    </label>
                                </div>
                                : null
                        }
                        </div>
                    })
                }

            </div>
        )
    }

}

export default RecursiveTree;
