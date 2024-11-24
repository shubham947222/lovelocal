import { Card } from "antd"
import { Line } from "react-chartjs-2"

const LineChart = ({
    img,
    title,
    description,
    data,
    options,
    amount,
    net
})=>{
    return (
        <Card
        bordered={false}
        className="bg-white shadow-md rounded-lg p-2"
    >
        <img src={img} width="32px" height="32px" alt="icon" />
        <p className="text-[#1E293B] font-semibold">{title}</p>
        <p className="text-[#94A3B8] text-xs">{description}</p>
        <div className="flex items-center flex-wrap justify-start">
            <h1>{amount}</h1>
            <div className={`${net<0?"bg-orange-500":"bg-green-500"} text-white rounded-lg mx-6 px-1 text-xs`}>
                {net}%
            </div>
        </div>
        <Line data={data} options={options} />
    </Card>
    )
} 
export default LineChart