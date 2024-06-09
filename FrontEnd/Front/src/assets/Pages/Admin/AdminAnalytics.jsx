import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import AdminLinks from '../../Components/admin/AdminLinks'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Form from 'react-bootstrap/Form';

const AdminAnalytics = () => {
  const data = [
    {
      name: '12:00 AM',
      "2024 year":4000,
      "2023 year":4100,
    },
    {
      name: '1:00 AM',
      "2024 year":6000,
      "2023 year":9100,
    },
    {
      name: '2:00 AM',
      "2024 year":10000,
      "2023 year":5100,
    },
    {
      name: '3:00 AM',
      "2024 year":7000,
      "2023 year":6000,
    },
    {
      name: '4:00 AM',
      "2024 year":9000,
      "2023 year":4800,
    },
    {
      name: '5:00 AM',
      "2024 year":11000,
      "2023 year":8700,
    },
    {
      name: '6:00 AM',
      "2024 year":7000,
      "2023 year":6500,
    },
    
  ];
  return (
    <>
      <Row className='m-5'>
          <Col md={2}>
            <AdminLinks />
          </Col>
          <Col md={10} >
              <h1>Black Friday Cumulative Revenue 11/05/2024 vs 3/01/2024</h1>

              <Form.Group className="mb-3" controlId="formDateToCompare">
                <Form.Label>Select First Date to Compare</Form.Label>
                <Form.Control 
                  type="date" 
                  placeholder="First Date to Compare" 
                />
              </Form.Group>
              <br />

              <Form.Group className="mb-3" controlId="formDateToCompare">
                <Form.Label>Select Second Date to Compare</Form.Label>
                <Form.Control 
                  type="date" 
                  placeholder="Second Date to Compare" 
                />
              </Form.Group>
              <ResponsiveContainer width="90%" height="70%">
                <LineChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" label={{value:"TIME", offset:50, position:"insideBottomRight" }}  allowDuplicatedCategory={false}/>
                  <YAxis label={{value:"REVENUE KSH", angle:-90, position:"insideLeft" }}/>
                  <Tooltip />
                  <Legend  verticalAlign='top' height={36}/>
                  <Line 
                    type="monotone" 
                    dataKey="2023 year" 
                    stroke="#8884d8" 
                    activeDot={{ r: 8 }} 
                    strokeWidth={4}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="2024 year" 
                    stroke="#82ca9d" 
                    strokeWidth={4}
                  />
                </LineChart>
              </ResponsiveContainer>
          </Col>
      </Row>
    </>
  )
}

export default AdminAnalytics