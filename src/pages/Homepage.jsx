import React from 'react'

import millify from 'millify';
import { Typography, Row, Col,  Statistic } from 'antd';
import {useGetCryptosQuery} from '../services/cryptoApi';
import Loader from './Loader'

const { Title } = Typography;

function Homepage() {
    const { data, isFetching} = useGetCryptosQuery();
    const globalStats = data?.data?.stats;

    if (isFetching) return <Loader />;
    return (
        <div>
            <Title level={2} className="heading">Global Crypto State</Title>
            <Row>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats}/></Col>
                <Col span={12}><Statistic title="Total Exchanges" value="5"/></Col>
                <Col span={12}><Statistic title="Total Market Cap" value="5"/></Col>
                <Col span={12}><Statistic title="Total 24h volume" value="5"/></Col>
                <Col span={12}><Statistic title="Total Markets" value="5"/></Col>
            </Row>
        </div>
    )
}

export default Homepage;

