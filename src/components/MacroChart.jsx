import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function MacroChart({ results, size = "large" }) {
  const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];
  console.log("MacroChart results:", results);

  const data = [
    { name: "Protein", value: results.protein },
    { name: "Carbs", value: results.carbs },
    { name: "Fats", value: results.fat },
  ];

  const chartSize =
    size === "small"
      ? { width: 300, height: 200, outerRadius: 60 }
      : { width: 500, height: 300, outerRadius: 100 };

  return (
    <PieChart width={chartSize.width} height={chartSize.height}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={30}
        outerRadius={chartSize.outerRadius}
        fill="#8884d8"
        paddingAngle={0}
        dataKey="value"
        label={({ name, value }) => `${name}: ${value}g`}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}

export default MacroChart;
