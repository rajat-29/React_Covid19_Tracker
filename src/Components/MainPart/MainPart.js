import React,{ Component } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import Title from '../Title/Title';
import Chart from '../Chart/Chart';
import BarGraph from '../BarGraph/BarGraph';
import List from '../List/List';

class MainPart extends Component {

    state = {
        summary : Object,
        states : [],
        chartData : {
            labels : [],
            datasets : [{ data : [],label : "", backgroundColor : [] }],
        },
    };

    componentDidMount() {
        this.getData();
    };

    getData() {
        axios
        .get("https://api.rootnet.in/covid19-in/stats/latest")
        .then((res) => {
            return res.data.data;
        })
        .then((res) => {
            this.setState({
                summary : res.summary,
            });
            this.storeData(res.regional);
        })
    }

    storeData(result) {
        result = this.addDataForChart(result);
        let store_states = this.state.states;

        for(let i=0;i<result.length;i++) {
            store_states.push(result[i]);
        }

        this.setState({
            states : store_states,
        })
    }

    addDataForChart(result) {
        this.state.chartData.datasets[0].label = 'State : ';
        result.map((res) => {
            this.state.chartData.labels.push(res.loc);
            this.state.chartData.datasets[0].data.push(res.totalConfirmed);
            this.state.chartData.datasets[0].backgroundColor.push(
                this.getRandomColor()
            );
            return res
        });
        return result;
    }

    getRandomColor() {
        var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        return ColorCode;
    }

    render() {
        return (
            <Container>
                <Title summary={this.state.summary} />
                <Chart chartData={this.state.chartData} />
                <BarGraph summary={this.state.summary} />
                <List states={this.state.states} />
            </Container>
        )
    }
}

export default MainPart;