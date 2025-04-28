import { ChartConfig, ChartContainer } from "@/components/ui/chart"

type ChartLayoutProps = {
    config: ChartConfig
    children: React.ReactNode
    className?: string
}

const ChartLayout: React.FC<ChartLayoutProps> = ({ config, children }) => {
    const chartConfig = {...config} satisfies ChartConfig

    return (
        <ChartContainer config={chartConfig}>
            <div>{children}</div>
        </ChartContainer>
    )
}

export default ChartLayout