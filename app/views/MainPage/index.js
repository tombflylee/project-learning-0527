import React from 'react';
import SideBar from '../../layouts/SideBar';
import Header from '../../layouts/Header';
import { Breadcrumb, BreadcrumbItem} from '../../layouts/Breadcrumb';


export default class extends React.Component{
	render(){
		return (
			<div className="layout">
				<div className="layout-item">
					<SideBar/>
						<Header className=""/>
						<section className="container">
							<Breadcrumb>
								<BreadcrumbItem routeName="商品" />
							</Breadcrumb>
						</section>
				</div>
			</div>
		)
	}
}