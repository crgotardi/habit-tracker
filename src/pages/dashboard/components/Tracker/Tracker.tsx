import clsx from "clsx"
import { use, useEffect } from "react"
import BarChart from "@/components/Charts/BarChart/BarChart"
import HabitContext from "@/contexts/HabitContext"

type TrackerProps = {
    className?: string,
}

const Tracker: React.FC<TrackerProps> = ({ className }) => {
    const classList = clsx('card p-4', className)
    const { strikes, getStrikes } = use(HabitContext)

    useEffect(() => {
        getStrikes()
    }, [getStrikes])
    
    return (
        <div className={classList}>
            <h4>Streaks</h4>
            
            <BarChart
                config={{
                    data: strikes,
                    layout: 'vertical',
                    yAxis: 'description',
                    xAxis: 'strikes',
                }}
            />
        </div>
    )
}

export default Tracker