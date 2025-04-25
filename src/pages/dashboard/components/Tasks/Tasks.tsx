import clsx from "clsx"

type ProgressProps = {
    className?: string,
}

const Tasks: React.FC<ProgressProps> = ({ className }) => {
    const classList = clsx('card p-4', className)
    
    return (
        <div className={classList}>
            <h4>Tasks</h4>
        </div>
    )
}

export default Tasks