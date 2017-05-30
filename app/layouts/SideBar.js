import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
import React from 'react';
import { Link } from 'react-router'

export default class extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			theme: 'dark',
			current: '1'
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e){
			this.setState({
				current: e.key,
			});
	}
	render(){
		return(
			<Menu theme={this.state.theme} 
			onClick={this.handleClick} 
			style={{width:340,height:'100%'}}
			defaultOpenKeys={['work']} 
			selectedKeys={[this.state.current]}
			mode='inline'> 
				<SubMenu key="work" title={<span><Icon type="laptop" /><span>商品目录</span></span>}>
					<Menu.Item key="1"><Link to="/handbag">包包</Link></Menu.Item>
					<Menu.Item key="2">虚位以待</Menu.Item>
					<Menu.Item key="3">虚位以待</Menu.Item>
					<Menu.Item key="4">虚位以待</Menu.Item>
				</SubMenu>
				<SubMenu key="life" title={<span><Icon type="shopping-cart" /><span>作为一个女生...</span></span>}>
					<Menu.Item key="5">diary</Menu.Item>
					<Menu.Item key="6">shopping stuff</Menu.Item>
					<SubMenu key="sub3" title={<span><Icon type="exclamation" /><span>虚位以待</span></span>}>
						<Menu.Item key="7">虚位以待</Menu.Item>
						<Menu.Item key="8">虚位以待</Menu.Item>
					</SubMenu>
				</SubMenu>
				<SubMenu key="travel" title={<span><Icon type="camera-o" /><span>Traveling around</span></span>}>
					<Menu.Item key="9">哈尔滨</Menu.Item>
					<Menu.Item key="10">上海</Menu.Item>
					<Menu.Item key="11">南京</Menu.Item>
					<Menu.Item key="12">青岛</Menu.Item>
				</SubMenu>
			</Menu>
		);
	};
}