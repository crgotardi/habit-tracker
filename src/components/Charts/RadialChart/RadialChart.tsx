import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"
import { ChartContainer } from "@/components/ui/chart"

interface RadialChartDataItem {
    label: string,
    total: number,
    completed: number
}

type RadialChartProps<RadialChartDataItem> = {
    config: {
        data: RadialChartDataItem[]
    }
}

const RadialChart: React.FC<RadialChartProps<RadialChartDataItem>> = ({ config }) => {
    const { data } = config

    return (
        <ChartContainer
            config={{}}
            className="mx-auto aspect-square max-h-[250px]"
        >
            <RadialBarChart
                data={data}
                startAngle={0}
                endAngle={360 / data[0].total * data[0].completed}
                innerRadius={80}
                outerRadius={110}
                className="fill-gray-800"
            >
                <PolarGrid
                    gridType="circle"
                    radialLines={false}
                    stroke="none"
                    className="first:fill-muted last:fill-background"
                    polarRadius={[86, 74]}
                />
                <RadialBar dataKey='completed' background cornerRadius={10} />
                <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                    <Label
                        content={({ viewBox }) => {
                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                return (
                                    <text
                                        x={viewBox.cx}
                                        y={viewBox.cy}
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                    >
                                        <tspan
                                            x={viewBox.cx}
                                            y={viewBox.cy}
                                            className="fill-foreground text-4xl font-bold"
                                        >
                                            {data[0].completed} of {data[0].total}
                                        </tspan>
                                        <tspan
                                            x={viewBox.cx}
                                            y={(viewBox.cy || 0) + 24}
                                            className="fill-muted-foreground"
                                        >
                                            {data[0].label}
                                        </tspan>
                                    </text>
                                )
                            }
                        }}
                    />
                </PolarRadiusAxis>
            </RadialBarChart>
        </ChartContainer>
    )
}

export default RadialChart