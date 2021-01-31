import { Row, Col, Container } from 'reactstrap';
import Card from './Card';

const main = () => {
  return (
    <Container className="themed-container" fluid="md">
      <Row>
        <Col md="3" className={"mb-2"}>
          <Card
            title="Jumlah Kasus"
            total="1.1M"
            update="100"
            color="danger"
            icon="BiMehBlank" />
        </Col>

        <Col md="3" className={"mb-2"}>
          <Card
            title="Total Sembuh"
            total="1.1M"
            update="100"
            color="success"
            icon="BiHappy" />
        </Col>

        <Col md="3" className={"mb-2"}>
          <Card
            title="Total Meniggal"
            total="1.1M"
            update="100"
            color="secondary"
            icon="BiSad" />
        </Col>

        <Col md="3" className={"mb-2"}>
          <Card
            title="Dalam Perawatan"
            total="1.1M"
            update="100"
            color="info"
            icon="BiHeartCircle" />
        </Col>
        
      </Row>
    </Container>
  );
}

export default main;