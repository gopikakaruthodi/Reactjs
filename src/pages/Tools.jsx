import React from "react";

class Tools extends React.Component{
    render(){
        const {children,onAction}=this.props
        const onlyChild=React.Children.only(children)
        const count=React.Children.count(onlyChild.props.children)
        return (
           <>
             <div className="select" >
                <select name="" id="" onChange={onAction}>
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
            </div>
            {children}
            <div className="count">
                Total count is {count}
            </div>
        </>
        )
    }
}

export default Tools;