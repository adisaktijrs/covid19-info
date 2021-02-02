import { Row, Col, Container, Card, CardTitle, CardText } from 'reactstrap';
import { SiWorldhealthorganization } from 'react-icons/si';
import styles from './Country.module.css';
import CountryFlag from './CountryFlag';

const country = (props) => {
  let icon = <SiWorldhealthorganization className={styles.IconSize} />;

  if (props.flag) {
    icon = <img
      className={styles.FlagSize}
      src={props.flag}
      alt={props.country} />
  }

  return (
    <Container className="themed-container" fluid="md">
      <Row>
        <Col>
          <Card body style={{ height: '280px', overflow: 'hidden' }} className={"border-0 shadow-sm rounded mb-3"}>
            <Row>
              <Col md="4" className={styles.CardAlign}>
                {icon}
                <CardTitle tag="h5" className={"mb-1"}>{props.country}</CardTitle>
                <CardText className={"mb-1"}>Populasi: {props.specificData?.toLocaleString()}</CardText>
              </Col>
              <Col>
                <Row className={styles.CardList}>
                  {props.data.map((item, id) => {
                    return <CountryFlag
                      key={id}
                      num={id}
                      flag={item.countryInfo.flag}
                      name={item.countryInfo.iso3}
                      cases={item.cases}
                      country={item.country}
                      clicked={props.clicked} />;
                  })}
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default country;
