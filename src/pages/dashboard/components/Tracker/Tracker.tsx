import clsx from "clsx"

type TrackerProps = {
    className?: string,
}

const Tracker: React.FC<TrackerProps> = ({ className }) => {
    const classList = clsx('card p-4', className)
    
    return (
        <div className={classList}>
            <h4>Tracker</h4>
        </div>
    )
}

export default Tracker