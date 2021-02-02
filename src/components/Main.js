import { Row, Col, Container } from 'reactstrap';
import Card from './Card';
import moment from 'moment-timezone';
import { Component } from 'react';

class Main extends Component {

  render() {
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
  
    let updatedTime = moment(this.props.updated);

    return (
      <Container className="themed-container" fluid="md">
        <Row>
          <Col md="3" className={"mb-2"}>
            <Card
              title="Jumlah Kasus"
              total={formatter(this.props.totalCases)}
              update={formatter(this.props.newCases)}
              color="danger"
              icon="BiMehBlank"
              BiCaretUp={true} />
          </Col>
          <Col md="3" className={"mb-2"}>
            <Card
              title="Total Sembuh"
              total={formatter(this.props.totalRecovered)}
              update={formatter(this.props.newRecovered)}
              color="success"
              icon="BiHappy"
              BiCaretUp={true} />
          </Col>
          <Col md="3" className={"mb-2"}>
            <Card
              title="Total Meniggal"
              total={formatter(this.props.totalDeath)}
              update={formatter(this.props.newDeath)}
              color="secondary"
              icon="BiSad"
              BiCaretUp={true} />
          </Col>
          <Col md="3" className={"mb-2"}>
            <Card
              title="Dalam Perawatan"
              total={formatter(this.props.activeCases)}
              update=""
              color="info"
              icon="BiHeartCircle"
              BiCaretUp={false} />
          </Col>
        </Row>
        <Row>
          <Col>
            <p className={"text-muted float-right"}>
              <small>
                Terakhir diperbarui: {updatedTime.tz('Asia/Jakarta').format('DD/MMM/YYYY, HH:mm')}
              </small>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

Main.defaultProps = {
  totalCases: 0,
  newCases: 0,
  totalRecovered: 0,
  newRecovered: 0,
  totalDeath: 0,
  newDeath: 0,
  activeCases: 0,
}

export default Main;