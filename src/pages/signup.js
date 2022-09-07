import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import '../Style/signup.less'
import { Form, Input, Button, Typography } from "antd";



const { Title } = Typography;

const Signup = () =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, isLoading, error} = useSignup()

    const handleSubmit = async (e) =>{
        e.preventDefault()

        await signup(email, password)
    }
    return(
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
                    <Title level={1} style={{color:'white', fontFamily:"'Montserrat Alternates', sans-serif"}}>Sign up</Title>
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
                        hasFeedback
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password
                            placeholder="Enter your password here...."
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Confirm Password :"
                        name="confirm-password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            { required: true, message: 'Please input your password!' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                  if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                  }
                    
                                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                              })
                    ]}
                    >
                        <Input.Password
                            placeholder="Confirm password here...."
                            onChange={(e) => setPassword(e.target.value)}
                            // value={confirmPassword}
                        />
                    </Form.Item>
                    <Button style={{ backgroundColor:'white', color:'#40916c',fontFamily:"'Montserrat Alternates', sans-serif" }} disabled={isLoading} type="primary" htmlType="submit">
                        Signup
                    </Button>
                    {error && <div>{error}</div>}
                </div>
            </div>
        </Form>
        // <form onSubmit={handleSubmit}>
        //     <h3>Signup</h3>
        //     <label> Email:</label>
        //     <input 
        //         type="email" 
        //         onChange={(e)=> setEmail(e.target.value)}
        //         value={email}
        //     />
        //     <label> password:</label>
        //     <input 
        //         type="password" 
        //         onChange={(e)=> setPassword(e.target.value)}
        //         value={password}
        //     />
        //     <button disabled={isLoading}>Signup</button>
        //     {error && <div> {error} </div>}
        // </form>
    )
}

export default Signup

