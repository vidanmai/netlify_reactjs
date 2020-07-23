import React from 'react';
import '../style/Home.css';

class Home extends React.Component {
    render() {
        return (
            <div className="landingPage">
                <div className="hero">
                    <h1>Velkommen til Vector</h1>
                    <br/>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias perferendis corporis blanditiis repellat repellendus, veritatis ipsum quos provident voluptatem, consequuntur illum debitis, at quisquam totam adipisci obcaecati sequi nam eligendi.
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;