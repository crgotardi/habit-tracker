import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"
import ChartLayout from "@/layouts/ChartLayout"

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
        <ChartLayout
            config={{}}
            className="mx-auto aspect-square max-h-[250px]"
        >
            <RadialBarChart
                data={data}
                startAngle={0}
                endAngle={250}
                innerRadius={80}
                outerRadius={110}
            >
                <PolarGrid
                    gridType="circle"
                    radialLines={false}
                    stroke="none"
                    className="first:fill-muted last:fill-background"
                    polarRadius={[86, 74]}
                />
                <RadialBar dataKey="visitors" background cornerRadius={10} />
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
                                            {data[0].label}
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
        </ChartLayout>
    )
}

export default RadialChart