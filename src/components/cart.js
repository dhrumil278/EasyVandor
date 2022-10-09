import React from 'react'
import { Row, Col, Typography } from 'antd'
import '../Style/cart.less'

const { Title } = Typography;

export default function cart() {
  
  return (
    <>
      <div className="main-cart">
          <Title level={1} style={{color:'#251B37', margin:'15px 20px'}}>Cart</Title>
        <div className="cartList">
          <Row gutter={[18, 28]}>
            <Col className='gutter-row' span={8}>
              <div className='cartItem'>col-8</div>
            </Col>
            <Col className='gutter-row' span={8}>
              <div className='cartItem'>col-8</div>
            </Col>
            <Col className='gutter-row' span={8}>
              <div className='cartItem'>col-8</div>
            </Col>
            <Col className='gutter-row' span={8}>
              <div className='cartItem'>col-8</div>
            </Col>
            <Col className='gutter-row' span={8}>
              <div className='cartItem'>col-8</div>
            </Col>
            <Col className='gutter-row' span={8}>
              <div className='cartItem'>col-8</div>
            </Col>
            <Col className='gutter-row' span={8}>
              <div className='cartItem'>col-8</div>
            </Col>
            <Col className='gutter-row' span={8}>
              <div className='cartItem'>col-8</div>
            </Col>
              <Col className='gutter-row' span={8}>
                <div className='cartItem'>col-8</div>
              </Col>
            <Col className='gutter-row' span={8}>
              <div className='cartItem'>col-8</div>
            </Col>
            <Col className='gutter-row' span={8}>
              <div className='cartItem'>col-8</div>
            </Col>
            <Col className='gutter-row' span={8}>
              <div className='cartItem'>col-8</div>
            </Col>
            <Col className='gutter-row' span={8}>
              <div className='cartItem'>col-8</div>
            </Col>
            <Col className='gutter-row' span={8}>
              <div className='cartItem'>col-8</div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}
