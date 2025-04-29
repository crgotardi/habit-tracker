import clsx from "clsx"
import { use, useMemo } from "react"
import RadialChart from "@/components/Charts/RadialChart/RadialChart"
import HabitContext from "@/contexts/HabitContext"

type ProgressProps = {
    className?: string,
}

const Progress: React.FC<ProgressProps> = ({ className }) => {
    const classList = clsx('card p-4', className)
    const { habits } = use(HabitContext)

    const chartData = useMemo(() => {
        return [{
            total: habits.length,
            completed: habits.filter(habit => habit.isCompleted).length,
            label: 'Tasks'
        }]
    }, [habits])

    return (
        <div className={classList}>
            <h4>Progress</h4>
            
            <RadialChart
                config={{
                    data: chartData
                }}
            />
        </div>
    )
}

export default Progress