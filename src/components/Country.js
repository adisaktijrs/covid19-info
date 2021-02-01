import { Row, Col, Container, Card, CardTitle, CardText } from 'reactstrap';
import { SiWorldhealthorganization } from 'react-icons/si';
import styles from './Country.module.css';
import CountryFlag from './CountryFlag';

const country = (props) => {
  let icon = <SiWorldhealthorganization className={styles.IconSize} />;

  return (
    <Container className="themed-container" fluid="md">
      <Row>
        <Col>
          <Card body style={{ height: '280px', overflow: 'hidden' }} className={"border-0 shadow-sm rounded mb-3"}>
            <Row>
              <Col md="4">
                {icon}
                <CardTitle tag="h5" className={"mb-1"}>Nama negara</CardTitle>
                <CardText className={"mb-1"}>Populasi:</CardText>
              </Col>
              <Col>
                <Row className={styles.CardList}>
                  {props.data.map((item, id) => {
                    return <CountryFlag
                      key={id}
                      num={id}
                      flag={item.countryInfo.flag}
                      name={item.countryInfo.iso3}
                      cases={item.cases} />;
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
