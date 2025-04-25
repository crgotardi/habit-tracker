import clsx from "clsx"
import { ShadowInnerIcon } from "@radix-ui/react-icons"

type SpinnerProps = {
    className?: string,
}

const Spinner: React.FC<SpinnerProps> = ({ className }) => {
    const classList = clsx(
        'animate-spin h-5 w-5',
        className
    )

    return (
        <ShadowInnerIcon className={classList} />
    )
}

export default Spinner