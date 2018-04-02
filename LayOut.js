import React from 'react';
import {Layout, Menu, Icon, Input, Row, Col} from 'antd';

const {Header, Sider, Content} = Layout;
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const SubMenu = Menu.SubMenu;
const Search = Input.Search;

class LayOut extends React.Component {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    handleClick = (e) => {
        console.log('click e', e);
        let path = e.keyPath.join("/");


    }
    searchContext = (val) => {
        console.log('输入内容为：' + val);
    }

    render() {
        return (
            <Router basename="/MapShow">
                <Layout>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo"/>
                        <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" theme="dark"
                              onClick={this.handleClick}>
                            <Menu.Item key="1">
                                <Icon type="pie-chart"/>
                                <span>Option 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="desktop"/>
                                <span>Option 2</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="inbox"/>
                                <span>Option 3</span>
                            </Menu.Item>
                            <SubMenu key="sub1" title={<span><Icon type="mail"/><span>Navigation One</span></span>}>
                                <Menu.Item key="5">Option 5</Menu.Item>
                                <Menu.Item key="6">Option 6</Menu.Item>
                                <Menu.Item key="7">Option 7</Menu.Item>
                                <Menu.Item key="8">Option 8</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="appstore"/><span>Navigation Two</span></span>}>
                                <Menu.Item key="9">Option 9</Menu.Item>
                                <Menu.Item key="10">Option 10</Menu.Item>
                                <SubMenu key="sub3" title="Submenu">
                                    <Menu.Item key="11">Option 11</Menu.Item>
                                    <Menu.Item key="12">Option 12</Menu.Item>
                                </SubMenu>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{background: '#fff', paddingLeft: '10px'}}>
                            <Row>
                                <Col span={8}>
                                    <Icon
                                        className="trigger"
                                        style={{fontSize: 20, color: '#08c'}}
                                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                        onClick={this.toggle}
                                    />
                                </Col>
                                <Col span={8}></Col>
                                <Col span={8}>
                                    <Search
                                        placeholder="请输入查询内容..."
                                        onSearch={this.searchContext}
                                        style={{width: 200}}
                                    />
                                </Col>
                            </Row>
                        </Header>
                        <Content style={{margin: '4px 6px', padding: 24, background: '#fff', minHeight: 280}}>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route path="/topics" component={Topics}/>
                        </Content>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

const Home = () => (
    <div>
        <h2>首页</h2>
    </div>
)

const About = () => (
    <div>
        <h2>关于</h2>
    </div>
)

const Topics = ({match}) => (
    <div>
        <h2>主题列表</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    使用 React 渲染
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    组件
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    属性 v. 状态
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
            <h3>请选择一个主题。</h3>
        )}/>
    </div>
)

const Topic = ({match}) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

export default LayOut
