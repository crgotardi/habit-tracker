import clsx from "clsx"
import { use } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import HabitContext from "@/contexts/HabitContext"

type ProgressProps = {
    className?: string,
}

const Tasks: React.FC<ProgressProps> = ({ className }) => {
    const classList = clsx('card p-4', className)
    const { habits, toggleHabit } = use(HabitContext)

    return (
        <div className={classList}>
            <h4>Tasks</h4>

            {habits?.map(habit => (
                <Card
                    key={habit.id}
                    className={clsx('bg-gray-800 text-white not-last-of-type:mb-4')}
                >
                    <CardContent className='flex items-center justify-start gap-4'>
                        <Checkbox
                            checked={habit.isCompleted}
                            onClick={() => {
                                toggleHabit(habit.id)
                            }}
                        />
                        <p className={
                            clsx(
                                'font-semibold',
                                {
                                    'line-through': habit.isCompleted
                                }
                            )
                        }>
                            {habit.description}
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default Tasks