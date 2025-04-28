import RadialChart from "@/components/Charts/RadialChart/RadialChart"
import clsx from "clsx"

type ProgressProps = {
    className?: string,
}

const Progress: React.FC<ProgressProps> = ({ className }) => {
    const classList = clsx('card p-4', className)

    const chartData = [
        { total: 4, completed: 3, label: 'Tasks' },
    ]

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