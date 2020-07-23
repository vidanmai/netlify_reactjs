import React from 'react';
import { Typography, Button } from '@material-ui/core';

class Blog extends React.Component {
    render() {
        return (
            <div>
                <Typography variant="h1">[Blog]</Typography>
                <Button variant="contained" color="secondary">
                    Hello Blog!
                </Button>
            </div>
        );
    }
}

export default Blog;
