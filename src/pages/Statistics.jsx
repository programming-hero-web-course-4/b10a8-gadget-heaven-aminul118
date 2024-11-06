import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import HelmetCompo from "../components/HelmetCompo";

const Statistics = () => {
  const statisticsInfo = useLoaderData();

  return (
    <div>
      <HelmetCompo title={`Statistics`}></HelmetCompo>
      <div className="bg-[#9538E2] text-center text-white py-16">
        <div className="w-8/12 mx-auto">
          <h1 className="text-3xl font-semibold">Statistics</h1>
          <p>
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>
      <div className="mt-14">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={statisticsInfo}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="price"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
