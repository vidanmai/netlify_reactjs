import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <div>
                <h1><u>Kontakt</u></h1>
                    <ul>
                        <li>Mandag - Fredag</li>
                        <li><strong>12.00</strong>-22.00</li>
                        <li>Lørdag og Søndag</li>
                        <li>13.00-22.00</li>
                    </ul>
                    <p>
                        KJØKKENET STENGER KLOKKEN 21:45 HELE UKEN.
                    </p>
                    <br/>
                    <p>
                        Adressen vår er Stockfleths gate 142b, 0612 Oslo. Kontakt oss på 22 70 41 20 eller kontakt@vectorrestaurant.no
                    </p>
            </div>
        );
    }
}

export default Contact;