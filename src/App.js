import React from 'react';
import logo from './logo.svg';
import './App.css';
import RecursiveTree from "./tree";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            options: [{
                nodeId: 1,
                nodeType: 'folder',
                nodeName: 'Root 1',
                children: [{
                    nodeId: 11,
                    nodeType: 'folder',
                    parentId: 1,
                    nodeName: 'Child 1',
                    children: []
                },{
                    nodeId: 12,
                    nodeType: 'node',
                    parentId: 1,
                    nodeName: 'Child 2',
                    children: []
                }]
            }, {
                nodeId: 2,
                nodeType: 'folder',
                nodeName: 'Root 2',
                children: [{
                    nodeId: 21,
                    nodeType: 'folder',
                    parentId: 2,
                    nodeName: 'Child 1',
                    children: [{
                        nodeId: 211,
                        nodeType: 'node',
                        parentId: 21,
                        nodeName: 'Grand child1',
                        children: []
                    }, {
                        nodeId: 212,
                        nodeType: 'node',
                        parentId: 21,
                        nodeName: 'Grand child2',
                        children: []
                    }]
                },{
                    nodeId: 22,
                    nodeType: 'node',
                    parentId: 2,
                    nodeName: 'Child 2',
                    children: []
                }]
            }, {
                nodeId: 3,
                nodeType: 'folder',
                nodeName: 'Root 3',
                children: [{
                    nodeId: 31,
                    nodeType: 'folder',
                    parentId: 3,
                    nodeName: 'Child 1',
                    children: []
                },{
                    nodeId: 32,
                    nodeType: 'folder',
                    parentId: 3,
                    nodeName: 'Child 2',
                    children: []
                }, {
                    nodeId: 33,
                    nodeType: 'folder',
                    parentId: 3,
                    nodeName: 'Child 3',
                    children: []
                }]
            }],
            selectedTreeNode: null

        }
    }

    onTreeNodeClick = (event, data) => {
        this.setState({selectedTreeNode: data});
    }

    render() {
        const {options, selectedTreeNode} = this.state;
        return(
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h4>Tree component</h4>
                </header>
                <RecursiveTree
                    options={options}
                    selectedTreeNode={selectedTreeNode}
                    onTreeNodeClick={this.onTreeNodeClick}
                />
            </div>
        )
    }
}

export default App;
