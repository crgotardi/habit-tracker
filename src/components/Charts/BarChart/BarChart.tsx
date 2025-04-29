import { Bar, BarChart as ReBarChart, LabelList, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { DataType, LayoutType } from "@/components/Charts/types"
import clsx from "clsx"

type BarChartProps<DataType> = {
    config: {
        data: DataType[]
        layout?: LayoutType,
        yAxis: string,
        xAxis: string,
    },
    className?: string
}

const BarChart: React.FC<BarChartProps<DataType>> = ({ config, className }) => {
    const { data, layout, yAxis, xAxis } = config
    const classList = clsx('chart', className)

    return (
        <ChartContainer className={classList} config={{}}>
            <ReBarChart
                data={data}
                layout={layout}
                margin={{
                    right: 16,
                }}
                barCategoryGap={'10%'}
                barGap={'10%'}
            >
                <YAxis
                    dataKey={yAxis}
                    type="category"
                    tickLine={false}
                    tickMargin={2}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                    hide
                />
                <XAxis dataKey={xAxis} type="number" hide />
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" />}
                />
                <Bar
                    dataKey={xAxis}
                    layout={layout}
                    maxBarSize={50}
                    className="fill-gray-800 font-bold"
                    radius={8}
                >
                    <LabelList
                        dataKey={yAxis}
                        position="insideLeft"
                        offset={8}
                        className="fill-accent"
                        fontSize={12}
                    />
                    <LabelList
                        dataKey={xAxis}
                        position="right"
                        offset={8}
                        className="fill-foreground"
                        fontSize={12}
                    />
                </Bar>
            </ReBarChart>
        </ChartContainer>
    )
}

export default BarChart