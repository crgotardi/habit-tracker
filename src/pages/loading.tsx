import { ShadowInnerIcon } from "@radix-ui/react-icons"

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-dvh w-dvw">
            <ShadowInnerIcon className="animate-spin h-5 w-5 text-gray-600" />
        </div>
    )
}

export default Loading