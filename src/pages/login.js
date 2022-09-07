import { useState } from "react"
import { useLogin } from '../hooks/useLogin'
import { Form, Input, Button, Typography } from "antd";
import '../Style/login.less'


const { Title } = Typography;

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isLoading } = useLogin()



    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }
    return (
        <Form
            name="basic"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={handleSubmit}
            autoComplete="off"
            // onFinishFailed={onFinishFailed}
            // onSubmit={handleSubmit}
        >
            <div className="mainForm">
                <div className="form-inside">
                    <Title level={1} style={{color:'white', fontFamily:"'Montserrat Alternates', sans-serif"}}>Login</Title>
                    <Form.Item
                        label="Email :"
                        name="email"
                        rules={[
                            { required: true, message: 'Please input your username!' },
                            { type: 'email', message: 'Please Enter Valid Email!' },
                        ]}
                    >
                        <Input
                            placeholder="Enter your email here...."
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Password :"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password
                            placeholder="Enter your password here...."
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </Form.Item>
                    <Button style={{ backgroundColor:'white', color:'#40916c',fontFamily:"'Montserrat Alternates', sans-serif" }} disabled={isLoading} type="primary" htmlType="submit">
                        Login
                    </Button>
                    {error && <div>{error}</div>}
                </div>
            </div>
        </Form>
    )
}

export default Login

