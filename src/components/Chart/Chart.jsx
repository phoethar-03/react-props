import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({dataPoints, year}) => {
    const dataPointValue = dataPoints.map((dataPoint) => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValue);
    return(
        <div className="chart">
            {dataPoints.map((dataPoint) => (
                <ChartBar 
                    years={year}
                    key={dataPoint.label} 
                    value={dataPoint.value} 
                    label={dataPoint.label} 
                    maxValue={totalMaximum}/>
            ))}
        </div>
    )
}

export default Chart;