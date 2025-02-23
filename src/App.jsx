import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {FormattedMessage, useIntl} from "react-intl";
import {Button, Container} from "react-bootstrap";

function App({ onLocaleChanged, locale }) {
    const intl = useIntl();

    return (
        <div>


            <Container>
                <h1>React i18n App Test</h1>
                <hr />
                <Button onClick={() => onLocaleChanged("en")}>English</Button>&nbsp;
                <Button onClick={() => onLocaleChanged("fa")}>Farsi</Button>&nbsp;
                <Button onClick={() => onLocaleChanged("ru")}>Russian</Button>&nbsp;

                &nbsp;&nbsp;&nbsp;
                <span className={"text text-danger"}>Language is <strong>{locale}</strong></span>

                <hr />

                <table className={"table table-striped table-bordered table-hover"}>
                    <thead>
                    <tr>
                        <th>Company Abreviation</th>
                        <th>Company Description</th>
                        <th>Company Net Profit</th>
                    </tr>

                    </thead>
                    <tbody>
                    <tr>
                        <td>{intl.$t({id: "companyName"})}</td>
                        <td>{intl.$t({id: "companyDescription"})}</td>
                        <td><FormattedMessage id="companyNetIncome" values={{'price':18}} /></td>
                    </tr>
                    </tbody>
                </table>

            </Container>
        </div>
    );
}

export default App
