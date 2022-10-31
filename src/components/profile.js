import { Form, Typography, Input, Button } from 'antd'
import React from 'react'
import '../Style/profile.less'


const { Title } = Typography;
export default function profile() {
  return (
    <div className='main-Profile'>
        <Title level={2} style={{paddingLeft:'50px'}} >Profile</Title>
        <div className="mainProfileForm">
            <Form
                name="basic"
                layout="horizontal"
                labelCol={{span: 6,}}
                wrapperCol={{span: 10,}}
                initialValues={{ remember: true }}
                autoComplete="off"
                // onFinish={handleSubmit}
            >
                <Form.Item label="Email :" name="email" >
                    <Input placeholder="First Name" />
                </Form.Item>
            </Form>
            <Form
                name="basic"
                layout="horizontal"
                labelCol={{span: 6,}}
                wrapperCol={{span: 10,}}
                initialValues={{ remember: true }}
                autoComplete="off"
                // onFinish={handleSubmit}
            >
                
                <Form.Item label="FirstName :" name="firstname">
                    <Input placeholder="First Name" />
                </Form.Item>
                <Form.Item label="LastName :" name="Lastname">
                    <Input placeholder="Lastname" />
                </Form.Item>
                <Form.Item label="Contanct No. :" name="contactno">
                    <Input placeholder="Contanct No." />
                </Form.Item>
                <Form.Item label="Address :" name="address">
                    <Input placeholder="Address" />
                </Form.Item>
                <Form.Item label=' ' colon={false}>
                    <Button type="primary" style={{width:'150px',backgroundColor:'#FFCACA', color:'#251B37'}}>Save</Button>
                </Form.Item>
                    
            </Form>
        </div>
    </div>
  )
}
