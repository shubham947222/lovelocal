import { Card } from 'antd';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip as ChartTooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    ChartTooltip,
    Legend
);

// Data configuration
const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
        {
            label: 'Current',
            data: [400, 300, 500, 700, 600, 800, 900],
            borderColor: '#8884d8',
            backgroundColor: 'rgba(136, 132, 216, 0.2)',
            tension: 0.4, // Smooth curves
        },
        {
            label: 'Previous',
            data: [300, 400, 600, 500, 700, 600, 1000],
            borderColor: '#82ca9d',
            backgroundColor: 'rgba(130, 202, 157, 0.2)',
            tension: 0.4,
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        tooltip: { enabled: true }, 
    },
};

const AvgChart = () => {
    return <Card
        bordered={false}
        className="bg-white shadow-md rounded-lg p-4"
    >
        <p className="text-[#1E293B] text-xl font-semibold">AVG Order Value</p>
        <div className="flex items-center">
            <h1 className='text-xl font-semibold'>2782</h1>
            <div className="bg-green-500 text-white rounded-lg mx-4 px-1 text-xs">
                34%
            </div>
        </div>
        <Line data={data} options={options} />;
    </Card>
};

export default AvgChart;
