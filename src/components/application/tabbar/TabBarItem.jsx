import React, { Component } from 'react';
class TabBarItem extends Component {
    constructor(props) {
        super(props);
    }

    /**
     * TabBarItem点击事件
     * @param {Number} index 当前点击菜单index
     */
    onItemClick(index) {
        this.props.changeTabBarIndex && this.props.changeTabBarIndex(index);
    }

    render() {
        return (
            <div 
                className={this.props.isSelected ? "tab-bar-item selected": "tab-bar-item"} 
                onClick={this.onItemClick.bind(this, this.props.index)}
            >
                <div className={"icon " + this.props.icon}></div>
                <span className="text">{this.props.text}</span>
            </div>
        )
    }
}

export default TabBarItem;