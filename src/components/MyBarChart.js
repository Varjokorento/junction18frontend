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

        
        let amountOfZeros2 = this.props.amountOfZeros2
        let amountOfOnes2 = this.props.amountOfOnes2
        let amountOfTwos2 = this.props.amountOfTwos2;

        let amountOfZeros3 = this.props.amountOfZeros3
        let amountOfOnes3 = this.props.amountOfOnes3
        let amountOfTwos3 = this.props.amountOfTwos3;


        const data = [
            { "y": amountOfZeros, "x": "Unhappy"},
            { "y": amountOfOnes, "x": "Medium happy" },
            { "y": amountOfTwos, "x": "Happy"}
        ]

        const data2 = [
            { "y": amountOfZeros2, "x": "Unhappy"},
            { "y": amountOfOnes2, "x": "Medium happy" },
            { "y": amountOfTwos2, "x": "Happy"}
        ]


        const data3 = [
            { "y": amountOfZeros3, "x": "Unhappy"},
            { "y": amountOfOnes3, "x": "Medium happy" },
            { "y": amountOfTwos3, "x": "Happy"}
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