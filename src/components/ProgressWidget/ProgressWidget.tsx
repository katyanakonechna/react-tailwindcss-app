import Card from "../Card/Card";
import PieChart from "../PieChart/PieChart";
import {data, data_2, data_3, data_4} from "../../pages/dashboard/Mocks";

const ProgressWidget = () => {
    return  <div className="grid grid-cols-2 gap-4 justify-center text-center relative p-4 lg:p-8">
        <div className="flex flex-wrap justify-center content-center">
            <div className='grid'>
                <h1 className="text-white text-8xl">2</h1>
                <span className="font-bold text-chocolate-50">Days in program</span>
            </div>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
            <Card>
                <>
                    <PieChart chartData={data} paddingAngle={5}/>
                    <h2 className="font-bold text-chocolate-300">Today</h2>
                </>
            </Card>
            <Card>
                <>
                    <PieChart chartData={data_2} paddingAngle={5}/>
                    <h2 className="font-bold text-chocolate-300">Program progress</h2>
                </>
            </Card>
            <Card>
                <>
                    <PieChart chartData={data_3} paddingAngle={5}/>
                    <h2 className="font-bold text-chocolate-300">Trainings</h2>
                </>
            </Card>
            <Card>
                <>
                    <PieChart chartData={data_4} paddingAngle={5}/>
                    <h2 className="font-bold text-chocolate-300">Health</h2>
                </>
            </Card>
        </div>
    </div>

}

export default ProgressWidget;