import { Row, Col, Container } from 'reactstrap';
import Chart from './Chart';

const chartArea = (props) => {
    return (
        <Container className="themed-container" fluid="md">
            <Row>
                <Col sm="4">
                    <Chart />
                </Col>
                <Col>a</Col>
                <Col>a</Col>
            </Row>
        </Container>
    );
}

export default chartArea;
