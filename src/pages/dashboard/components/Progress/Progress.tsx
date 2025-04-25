import clsx from "clsx"

type ProgressProps = {
    className?: string,
}

const Progress: React.FC<ProgressProps> = ({ className }) => {
    const classList = clsx('card p-4', className)

    return (
        <div className={classList}>
            <h4>Progress</h4>
        </div>
    )
}

export default Progress