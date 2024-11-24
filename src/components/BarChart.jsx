import { Card } from 'antd';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  // Register necessary Chart.js components
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  const data = {
    labels: ['Mar 22', 'Apr 22', 'May 22', 'Jun 22', 'Jul 22', 'Aug 22'],
    datasets: [
      {
        label: 'Direct',
        data: [10, 90, 50, 70, 90, 60],
        backgroundColor: '#4F46E5',
        barThickness: 20,
      },
      {
        label: 'Indirect',
        data: [30, 50, 70, 30, 60, 90],
        backgroundColor: '#22D3EE',
        barThickness: 20,
      },
    ],
  };
  
  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
    },
    scales: {
      x: { grid: { display: false } },
      y: { ticks: { stepSize: 20 } },
    },
  };
  
  const BarChart = () => (
    <Card>
        <p  className="text-[#1E293B] text-xl font-semibold">Direct VS Indirect</p>
        <div className='flex items-center gap-4 mx-4'>
        <p className='text-xl'><span className='text-[#4F46E5] h-[0.5px] w-[0.5px] text-sm'>O</span>1.7 Cr <span className='text-sm '>Direct</span></p>
        <p className='text-xl'><span className='text-[#22D3EE] h-[0.5px] w-[0.5px] rounded-full text-sm'>O</span>2.4 Cr <span className='text-sm'>Indirect</span></p>
        </div>
      <Bar data={data} options={options} />
    </Card>
  );
  
  export default BarChart;
  