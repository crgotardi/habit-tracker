import { Bar, BarChart as ReBarChart, LabelList, XAxis, YAxis } from "recharts"
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { DataType, LayoutType } from "@/components/Charts/types"
import ChartLayout from "@/layouts/ChartLayout"

type BarChartProps<DataType> = {
    config: {
        data: DataType[]
        layout?: LayoutType,
        yAxis: string,
        xAxis: string,
    }
}

const BarChart: React.FC<BarChartProps<DataType>> = ({ config }) => {
    const { data, layout, yAxis, xAxis } = config

    return (
        <ChartLayout config={{}}>
            <ReBarChart
                data={data}
                layout={layout}
                margin={{
                    right: 16,
                }}
            >
                <YAxis
                    dataKey={yAxis}
                    type="category"
                    tickLine={false}
                    tickMargin={10}
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
                    fill="var(--color-desktop)"
                    radius={4}
                >
                    <LabelList
                        dataKey={yAxis}
                        position="insideLeft"
                        offset={8}
                        className="fill-[--color-label]"
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
        </ChartLayout>
    )
}

export default BarChart