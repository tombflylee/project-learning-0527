import React from 'react';
import SideBar from '../../layouts/SideBar';
import Header from '../../layouts/Header';
import { Breadcrumb, BreadcrumbItem} from '../../layouts/Breadcrumb';


export default class extends React.Component{
	render(){
		return (
			<div className="holygrail">
				<Header/>
				<div className="holygrail-body">
					<SideBar className="holygrail-nav"/>
					<section className="holygrail-content">
						<Breadcrumb>
							<BreadcrumbItem routeName="商品" />
							<BreadcrumbItem routeName="包包" />
						</Breadcrumb>
					</section>
				</div>
			</div>
		)
	}
}