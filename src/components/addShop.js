import { Form, Typography, Input, Button, Checkbox } from 'antd'
import React from 'react'
import '../Style/profile.less'


const { Title } = Typography;
export default function AddShop() {

    function onChacked(e) {
        console.log(`checked = ${e.target.checked}`);
    }
  return (
    <div className='main-Profile'>
        <Title level={2} style={{paddingLeft:'50px'}} >Add Shop</Title>
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
            >
                
                <Form.Item label="Shop Name :" name="shopname">
                    <Input placeholder="First Name" />
                </Form.Item>
                <Form.Item label="Contanct No. :" name="contactno">
                    <Input placeholder="Contanct No." />
                </Form.Item>
                <Form.Item label="Address :" name="address">
                    <Input placeholder="Address" />
                </Form.Item>
                <Form.Item label="Dilivery Option" name="diliveryoption">
                    <Checkbox onChange={onChacked}>Take away</Checkbox>
                    <Checkbox onChange={onChacked}>Home Dilivery</Checkbox>
                </Form.Item>
                <Form.Item label=' ' colon={false}>
                    <Button type="primary" style={{width:'150px',backgroundColor:'#FFCACA', color:'#251B37'}}>Add Shop</Button>
                </Form.Item>
                    
            </Form>
        </div>
    </div>
  )
}
