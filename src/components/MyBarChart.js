// MyBarChart.js
import React from 'react';
import {
    XYPlot,
    XAxis, // Shows the values on x axis
    YAxis, // Shows the values on y axis
    VerticalBarSeries,
    LabelSeries
} from 'react-vis';

export default class MyBarChart extends React.Component {
    

    componentDidMount() {
        console.log(this.props, "PROPS")
    }

    render() {
    
        let amountOfZeros = this.props.amountOfZeros
        let amountOfOnes = this.props.amountOfOnes
        let amountOfTwos = this.props.amountOfTwos;
        const data = [
            { "y": amountOfZeros, "x": "Unhappy"},
            { "y": amountOfOnes, "x": "Medium happy" },
            { "y": amountOfTwos, "x": "Happy"}
        ]

        const chartWidth = 200;
        const chartHeight = 300;
        const chartDomain = [0, chartHeight];
        return (
            <div className="text-center">
            <XYPlot 
                xType="ordinal" 
                width={chartWidth} 
                height={chartHeight} 
                yDomain={chartDomain}
            >
                <XAxis />
                <YAxis />
                <VerticalBarSeries
                    data={data}
                />
                <LabelSeries
                    data={data.map(obj => {
                        return { ...obj, label: obj.y.toString() }
                    })}
                    labelAnchorX="middle"
                    labelAnchorY="text-after-edge"
                />
            </XYPlot>
            </div>
        );
    }
}