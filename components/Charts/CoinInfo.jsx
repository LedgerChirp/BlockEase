import useAxios from "./UseAxios";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment";
import Skeleton from "./Skeleton";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend
);

const HistoryChart = () => {
	const id = "ethereum";
	const { response } = useAxios(
		`coins/${id}/market_chart?vs_currency=usd&days=30&interval=daily`
	);

	if (!response) {
		return (
			<div className="mx-auto w-full h-full">
				<Skeleton className="h-full w-full" />
			</div>
		);
	}
	const coinChartData = response.prices.map((value) => ({
		x: value[0],
		y: value[1].toFixed(2),
	}));

	const options = {
		responsive: true,
	};
	const data = {
		labels: coinChartData.map((value) => moment(value.x).format("MMM DD")),
		datasets: [
			{
				fill: true,
				label: id,
				data: coinChartData.map((val) => val.y),
				borderColor: "rgb(53, 162, 235)",
				backgroundColor: "rgba(53, 162, 235, 0.5)",
			},
		],
	};
	return (
		<div className="my-auto">
			<Line
				className="lg:w-[400px] lg:h-[200px] sm:w-[720px] sm:h-[268px]"
				options={options}
				data={data}
			/>
		</div>
	);
};

export default HistoryChart;
