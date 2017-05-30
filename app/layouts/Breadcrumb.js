import React from 'react';
import { Link } from 'react-router';

class Breadcrumb extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<ul className="breadcrumb-ul">
			{this.props.children}
			</ul>
		)
	}
}

class BreadcrumbItem extends React.Component{
	constructor(props){
		super(props);

	}
	render(){
		return(
			<li className="breadcrumb-li">
				<Link to={{pathname:`/${this.props.routeName}`}}>{this.props.routeName}</Link>
			</li>
		)
	}
}

export { Breadcrumb , BreadcrumbItem}
