import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import s from './statistic.module.css'

export default class Statistic extends Component {

    constructor(props) {
        super(props);
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                    label: 'Your quiz success in this year',
                    data: [85, 70, 65, 87, 95, 61, 75, 52, 88, 36, 45, 90],
                    backgroundColor: [
                        'rgba(255,105,145,0.6)',
                        'rgba(155,100,210,0.6)',
                        'rgba(90,178,255,0.6)',
                        'rgba(240,134,67,0.6)',
                        'rgba(120,120,120,0.6)',
                        'rgba(250,55,197,0.6)',
                        'rgba(255,105,145,0.6)',
                        'rgba(155,100,210,0.6)',
                        'rgba(90,178,255,0.6)',
                        'rgba(240,134,67,0.6)',
                        'rgba(120,120,120,0.6)',
                        'rgba(250,55,197,0.6)'
                    ]
                }
            ]
        }
    }

    render()
    {
        return(
            <div className={s.chart}>
                <Bar
                    data={this.data}
                    options={{maintainAspectRatio: false}}
                />
            </div>
        )
    }
}