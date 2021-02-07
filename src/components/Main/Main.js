import { Row, Col, Container } from 'reactstrap';
import Card from '../Card/Card';

const main = (props) => {

  const formatter = (num) => {
    let finalNumber = '';
    if (num > 999999) {
      finalNumber = (num / 1000000).toFixed(1) + "M";
    } else if (num > 999) {
      finalNumber = (num / 1000).toFixed(1) + "K";
    } else {
      finalNumber = num;
    }
    return finalNumber;
  }


  return (
    <Container className="themed-container mb-2" fluid="md">
      <Row>
        <Col md="3" className={"mb-2"}>
          <Card
            title="Jumlah Kasus"
            total={formatter(props.totalCases)}
            update={formatter(props.newCases)}
            color="danger"
            icon="BiMehBlank"
            BiCaretUp={true} />
        </Col>
        <Col md="3" className={"mb-2"}>
          <Card
            title="Total Sembuh"
            total={formatter(props.totalRecovered)}
            update={formatter(props.newRecovered)}
            color="success"
            icon="BiHappy"
            BiCaretUp={true} />
        </Col>
        <Col md="3" className={"mb-2"}>
          <Card
            title="Total Meninggal"
            total={formatter(props.totalDeath)}
            update={formatter(props.newDeath)}
            color="secondary"
            icon="BiSad"
            BiCaretUp={true} />
        </Col>
        <Col md="3" className={"mb-2"}>
          <Card
            title="Dalam Perawatan"
            total={formatter(props.activeCases)}
            update=""
            color="info"
            icon="BiHeartCircle"
            BiCaretUp={false} />
        </Col>
      </Row>
      
    </Container>
  )
}

main.defaultProps = {
  totalCases: 0,
  newCases: 0,
  totalRecovered: 0,
  newRecovered: 0,
  totalDeath: 0,
  newDeath: 0,
  activeCases: 0,
}

export default main;