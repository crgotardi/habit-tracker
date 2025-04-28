import BarChart from "@/components/Charts/BarChart/BarChart"
import clsx from "clsx"

type TrackerProps = {
    className?: string,
}

const chartData = [
    { description: "Read a book", strikes: 10 },
    { description: "Gym", strikes: 2 },
    { description: "Meditation", strikes: 4 },
    { description: "Learn a new language", strikes: 7 },
]

const Tracker: React.FC<TrackerProps> = ({ className }) => {
    const classList = clsx('card p-4', className)
    
    return (
        <div className={classList}>
            <h4>Streaks</h4>
            <BarChart
                config={{
                    data: chartData,
                    layout: 'vertical',
                    yAxis: 'description',
                    xAxis: 'strikes',
                }}
            />
        </div>
    )
}

export default Tracker