import React,{ Component } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';

class MainPart extends Component {

    state = {
        states : [],
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        axios
        .get("https://api.rootnet.in/covid19-in/stats/latest")
        .then((res) => {
            return res.data.data;
        })
        .then((res) => {
            this.storeData(res.regional);
        })
    }

    storeData(result) {
        let store_states;
        
        for(let i=0;i<res.length;i++) {
            store_states.push(result[i]);
        }

        this.setState({
            states : store_states;
        })
    }

    render() {
        return (
            <Container>

            </Container>
        )
    }
}

export default MainPart;