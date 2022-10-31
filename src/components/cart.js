import React from 'react'
import { Row, Col, Typography, InputNumber } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import BlueBarry from '../blueBarry.jpg'
import '../Style/cart.less'

const { Title } = Typography;

export default function cart() {

  return (
    <>
      <div className="main-cart">
        <Title level={1} style={{ color: '#251B37', margin: '15px 20px' }}>Cart</Title>
        <div className="cartList">
          <Row gutter={[18, 28]}>
            <Col className='gutter-row' span={8}>
              <div className='cartItem'>
                <div className="itemImage"
                  style={{
                    width:'150px',
                    marginRight: '15px',
                    borderRadius:'5px',
                    height:'100%',
                    background: `url(${BlueBarry})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                  }}  
                ></div>
                <div className="itemDetails">
                  <p className="itemName">Item Name</p>
                  <p className="shopName">Shop Name</p>
                  <div className="horizontalGroupButton">
                    <InputNumber style={{ width: "120px" }} addonBefore="Qnt" defaultValue={1} />
                    <span className='removeIcon'>
                      <DeleteOutlined style={{ fontSize: '20px' }} />
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col className='gutter-row' span={8}>
              <div className='cartItem'>
                <div className="itemImage"
                  style={{
                    width:'150px',
                    marginRight: '15px',
                    borderRadius:'5px',
                    height:'100%',
                    background: `url(${BlueBarry})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                  }}  
                ></div>
                <div className="itemDetails">
                  <p className="itemName">Item Name</p>
                  <p className="shopName">Shop Name</p>
                  <div className="horizontalGroupButton">
                    <InputNumber style={{ width: "120px" }} addonBefore="Qnt" defaultValue={1} />
                    <span className='removeIcon'>
                      <DeleteOutlined style={{ fontSize: '20px' }} />
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col className='gutter-row' span={8}>
              <div className='cartItem'>
                <div className="itemImage"
                  style={{
                    width:'150px',
                    marginRight: '15px',
                    borderRadius:'5px',
                    height:'100%',
                    background: `url(${BlueBarry})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                  }}  
                ></div>
                <div className="itemDetails">
                  <p className="itemName">Item Name</p>
                  <p className="shopName">Shop Name</p>
                  <div className="horizontalGroupButton">
                    <InputNumber style={{ width: "120px" }} addonBefore="Qnt" defaultValue={1} />
                    <span className='removeIcon'>
                      <DeleteOutlined style={{ fontSize: '20px' }} />
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col className='gutter-row' span={8}>
              <div className='cartItem'>
                <div className="itemImage"
                  style={{
                    width:'150px',
                    marginRight: '15px',
                    borderRadius:'5px',
                    height:'100%',
                    background: `url(${BlueBarry})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                  }}  
                ></div>
                <div className="itemDetails">
                  <p className="itemName">Item Name</p>
                  <p className="shopName">Shop Name</p>
                  <div className="horizontalGroupButton">
                    <InputNumber style={{ width: "120px" }} addonBefore="Qnt" defaultValue={1} />
                    <span className='removeIcon'>
                      <DeleteOutlined style={{ fontSize: '20px' }} />
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col className='gutter-row' span={8}>
              <div className='cartItem'>
                <div className="itemImage"
                  style={{
                    width:'150px',
                    marginRight: '15px',
                    borderRadius:'5px',
                    height:'100%',
                    background: `url(${BlueBarry})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                  }}  
                ></div>
                <div className="itemDetails">
                  <p className="itemName">Item Name</p>
                  <p className="shopName">Shop Name</p>
                  <div className="horizontalGroupButton">
                    <InputNumber style={{ width: "120px" }} addonBefore="Qnt" defaultValue={1} />
                    <span className='removeIcon'>
                      <DeleteOutlined style={{ fontSize: '20px' }} />
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}
