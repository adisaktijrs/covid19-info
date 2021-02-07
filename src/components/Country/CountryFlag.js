import { Col, Card, CardText } from 'reactstrap';
import styles from './CountryFlag.module.css';

const countryFlag = (props) => {

    const clickHandler = () => {
        props.clicked(props.country);
    }
    
    return (
        <Col sm="4" className={"mb-2 ml-0 mr-0"}>
        <div className={styles.CardClickable}>
            <Card className={"list-group-item-action"} onClick={clickHandler}>
                <CardText className={"pl-2 pt-1 pb-1"}>
                    <span className={styles.Number}>{props.num + 1}.</span>
                    <img
                        className={styles.FlagSize}
                        src={props.flag}
                        alt={props.name} />
                    <span>{props.name}</span>
                    <span className={styles.Cases}>{props.cases.toLocaleString()}</span>

                </CardText>
            </Card>
        </div>
        </Col>
    )
}

export default countryFlag;