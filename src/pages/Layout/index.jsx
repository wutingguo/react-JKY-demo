import React, { useEffect } from 'react'
import styles from './index.module.scss'
import { Link, Switch, Route } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Popconfirm } from 'antd'
import {
  LogoutOutlined,
  HomeOutlined,
  HddOutlined,
  EditOutlined,
} from '@ant-design/icons'
import Home from '../Home'
import Article from '../Article'
import Publish from '../Publish'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getuserInfo } from '@/store/actions/user'
import { loginOut } from '@/store/actions/login'
import { useHistory } from 'react-router-dom'

const { Header, Content, Sider } = Layout

export default function MyLayout() {
  const pathname = useLocation().pathname
  const history = useHistory()
  const dispatch = useDispatch()
  // 获取用户名
  const userName = useSelector((state) => state.user.name)
  // 获取用户的信息
  useEffect(() => {
    dispatch(getuserInfo())
  }, [dispatch])
  const confirm = async () => {
    await dispatch(loginOut())
    history.push('/login')
  }
  return (
    <div className={styles.root}>
      <Layout>
        <Header className="header">
          <div className="logo" />
          {/* 右侧内容 */}
          <div className="profile">
            <span>{userName}</span>
            <Popconfirm
              title="你确定要退出吗?"
              onConfirm={confirm}
              okText="Yes"
              cancelText="No"
            >
              <span>
                <LogoutOutlined></LogoutOutlined> 退出
              </span>
            </Popconfirm>
          </div>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              theme="dark"
              selectedKeys={[pathname]}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item icon={<HomeOutlined />} key="/home">
                <Link to="/home">数据概览</Link>
              </Menu.Item>
              <Menu.Item icon={<HddOutlined />} key="/home/article">
                <Link to="/home/article"> 内容管理</Link>
              </Menu.Item>
              <Menu.Item icon={<EditOutlined />} key="/home/publish">
                <Link to="/home/publish">发布文章</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Switch>
                <Route exact path="/home" component={Home}></Route>
                <Route path="/home/article" component={Article}></Route>
                <Route path="/home/publish" component={Publish}></Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
}
