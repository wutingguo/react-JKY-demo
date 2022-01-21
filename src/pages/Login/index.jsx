import { loginGetToken } from '@/store/actions/login'
import { Card, Form, Input, Button, Checkbox, message } from 'antd'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import logo from '../../assets/logo.png'
import styles from './index.module.scss'

const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const getFromValue = async (values) => {
    console.log(values)
    await dispatch(loginGetToken(values))
    message.success('登录成功!!!', 1)
    history.push('/home')
  }
  return (
    <div className={styles.root}>
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}

        <Card className="login-container">
          {/* 图片 */}
          <img className="login-logo" src={logo} alt="" />
          {/* 表单 */}
          <Form
            autoComplete="off"
            size="large"
            validateTrigger={['onChange', 'onBlur']}
            onFinish={getFromValue}
            initialValues={{
              mobile: '13911111111',
              code: '246810',
              remember: true,
            }}
          >
            <Form.Item
              name={'mobile'}
              validateTrigger={['onBlur']}
              rules={[
                {
                  required: true,
                  message: '手机号不能为空!!!',
                },
                {
                  pattern:
                    /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
                  message: '请输入正确格式的手机号码!!!',
                },
              ]}
            >
              <Input placeholder="请输入手机号" />
            </Form.Item>

            <Form.Item
              name={'code'}
              rules={[{ required: true, message: '验证码不能为空!!!' }]}
            >
              <Input placeholder="请输入验证码" />
            </Form.Item>
            {/* 检验记得加name配合 */}
            <Form.Item
              name={'remember'}
              rules={[
                {
                  validator(_, value) {
                    if (!value) {
                      return Promise.reject(
                        new Error('请确认勾选并阅读协议!!!')
                      )
                    }
                    return Promise.resolve()
                  },
                },
              ]}
              valuePropName={'checked'}
            >
              <Checkbox>我已阅读并同意[隐私条款]和[用户协议]</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Card>
    </div>
  )
}

export default Login
