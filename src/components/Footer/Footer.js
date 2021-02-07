import { Container, Row, Col } from 'reactstrap';
import moment from 'moment-timezone';


const footer = (props) => {
    let updatedTime = moment(props.updated);

    return (
        <Container className="themed-container mb-4" fluid="md">
            <Row>
                <Col className={"text-center text-muted mb-2"}>
                    <p className={"mb-0 pb-0"}>
                        <small>
                            Terakhir diperbarui: <strong>{updatedTime.tz('Asia/Jakarta').format('DD MMM YYYY, HH:mm z')}</strong>
                        </small>

                    </p>
                    <p className={"text-muted"}>
                        <small>
                            Sumber data: Worldometers & Johns Hopkins University CSSE (memungkinkan terdapat perbedaan data dari dua sumber tersebut) via <a href="https://disease.sh/" target="_blank" rel="noreferrer">disease.sh API</a>.
                        </small>
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className={"text-center"}>
                    <p className={"mb-0 pb-0"}>
                        Dibuat dengan ❤️ dan <a href="http://reactjs.org/" target="_blank" rel="noreferrer">React</a>
                    </p>
                    <p>
                        oleh <a href="https://adisaktijrs.github.io/" target="_blank" rel="noreferrer">@adisaktijrs</a>
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default footer;