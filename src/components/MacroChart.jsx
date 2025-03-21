import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function MacroChart({ results }) {
  const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

  const data = [
    { name: "Protein", value: results.protein },
    { name: "Carbs", value: results.carbs },
    { name: "Fats", value: results.fat },
  ];

  return (
    <PieChart width={500} height={300}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={30}
        outerRadius={100}
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
