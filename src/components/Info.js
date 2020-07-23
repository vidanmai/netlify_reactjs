import React from 'react';
import { Container } from '@material-ui/core';

class Info extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <h1><u>Restaurant Vector</u></h1>
                    <p>
                        Vector Restaurant holder til i nedre Grünerløkka på Sagene. Her kan du oppleve det beste fra ulike kjøkken i Asia.
                        Vi tilbyr retter som sushi, samt forskjellige wok retter.
                    </p>
                    <br/>
                    <p>
                    Du er velkommen til å nye rettene på vår restaurant i avslappende og trendy omgivelser, eller bestille takeaway.
                    </p>
                </Container>
            </div>
            
        );
    }
}

export default Info;