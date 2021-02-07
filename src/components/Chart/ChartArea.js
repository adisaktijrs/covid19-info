import { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import Chart from './Chart';
import ChartRadial from './ChartRadial';

class ChartArea extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.data !== this.props.data;
    }

    render() {
        const country = this.props.ratio.country || 'Global';
        const { cases, deaths, recovered } = country === 'Global' ? this.props.data : this.props.data.timeline;
        const ratio = this.props.ratio.recovered / this.props.ratio.cases * 100; 

        return (
            <Container className="themed-container" fluid="md">
                <Row>
                    <Col md="3">
                        <Chart
                            title="Akumulasi Kasus"
                            data={cases}
                            type="cases" />
                    </Col>
                    <Col md="3">
                        <Chart
                            title="Akumulasi Sembuh"
                            data={recovered}
                            type="recovered" />
                    </Col>
                    <Col md="3">
                        <Chart
                            title="Akumulasi Meninggal"
                            data={deaths}
                            type="deaths" />
                    </Col>
                    <Col md="3">
                        <ChartRadial
                            title="Rasio Kesembuhan"
                            data={ratio}
                            type="deaths" />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ChartArea;
