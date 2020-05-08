import React from 'react';
import { Bar } from 'react-chartjs-2';

function BarGraph(props) {

    return (
        <Bar
            data={{
                labels : ['Infected','Recovered','Deaths'],
                datasets : [
                    {
                        label : 'People',
                        backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                        data: [props.summary.confirmedCasesIndian,props.summary.discharged,props.summary.deaths],
                    },
                ],
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: `Current Status in India` },
            }}
        />
    );
}

export default BarGraph;