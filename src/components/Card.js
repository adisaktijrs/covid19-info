import { Card, CardText, CardTitle, Col, Row } from 'reactstrap';
import { BiSad, BiHappy, BiHeartCircle, BiMehBlank, BiCaretUp } from "react-icons/bi";

import styles from './Card.module.css';

const card = (props) => {
    let icon = <BiMehBlank className={styles.IconSize} />;
    if (props.icon === 'BiHappy') {
        icon = <BiHappy className={styles.IconSize} />;
    } else if (props.icon === 'BiHeartCircle') {
        icon = <BiHeartCircle className={styles.IconSize} />;
    } else if (props.icon === 'BiSad') {
        icon = <BiSad className={styles.IconSize} />;
    }

    let arrow = '';
    if (props.BiCaretUp) {
        arrow = <BiCaretUp />
    }

    return (
        <Card body inverse color={props.color} className={"border-0 shadow rounded"}>
            <Row>
                <Col>
                    <CardTitle tag="h6" className={"mb-0"}>{props.title}</CardTitle>
                    <CardText tag="h2" className={"mb-0"}>{props.total}</CardText>
                    <CardText >
                        Orang <span className={"float-right"}>
                            {arrow}{props.update}
                        </span>
                    </CardText>
                </Col>
                <Col xs="4" className={"pl-0"}>{icon}</Col>
            </Row>
        </Card>
    )
}

export default card;