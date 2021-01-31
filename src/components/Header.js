import { Container, Navbar, NavbarBrand, NavbarText } from 'reactstrap';
import { RiVirusLine } from 'react-icons/ri';
import styles from './Header.module.css';

const header = (props) => {

    return (
        <div>
            <Navbar color="light" light className={"mb-3 border-bottom"} >
                <Container className="themed-container" fluid="md">
                    <NavbarBrand className={styles.Spin} href="/">
                        <RiVirusLine className={styles.Virus} />
                    </NavbarBrand>
                    <NavbarText>COVID-19 Info</NavbarText>
                </Container>
            </Navbar>
        </div>
    );
}

export default header;