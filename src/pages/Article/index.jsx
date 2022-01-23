import React from 'react'
import { Card, Select } from 'antd'
import styles from './index.module.scss'

import { Breadcrumb, Form, Button, Radio, DatePicker, Table } from 'antd'
import { Link } from 'react-router-dom'
const { Option } = Select
const { RangePicker } = DatePicker
const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
]

const columns = [
  {
    title: '封面',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '标题',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '状态',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '发布时间',
    dataIndex: 'address',
  },
  {
    title: '阅读数',
    dataIndex: 'address',
  },
  {
    title: '评论数',
    dataIndex: 'address',
  },
  {
    title: '点赞数',
    dataIndex: 'address',
  },
  {
    title: '操作',
    dataIndex: 'address',
  },
]
export default function Article() {
  return (
    <div className={styles.root}>
      <Card
        title={
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/home">首页</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>文章列表</Breadcrumb.Item>
          </Breadcrumb>
        }
      >
        <Form>
          <Form.Item label="状态" name="username">
            <Radio.Group>
              <Radio value={-1}>全部</Radio>
              <Radio value={0}>草稿</Radio>
              <Radio value={1}>待审核</Radio>
              <Radio value={2}>审核通过</Radio>
              <Radio value={3}>审核失败</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="频道" name="password">
            <Select placeholder="请选择频道" style={{ width: 200 }}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </Form.Item>

          <Form.Item label="日期" name="password">
            <RangePicker />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              筛选
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Card>
        <Card title="根据筛选条件共查询到xxx条结果:" style={{ marginTop: 10 }}>
          <Table dataSource={dataSource} columns={columns} />
        </Card>
      </Card>
    </div>
  )
}
