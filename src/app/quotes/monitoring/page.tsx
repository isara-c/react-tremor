"use client"
import { BarChart } from "@/components/BarChart"
import { ComboChart } from "@/components/ComboChart"
import { ConditionalBarChart } from "@/components/ConditionalBarChart"
import {
  CustomTooltip,
  CustomTooltip2,
  CustomTooltip3,
  CustomTooltip4,
} from "@/components/CustomTooltips"
import { LineChart } from "@/components/LineChart"
import { dataChart, dataChart2, dataChart3, dataChart4 } from "@/data/data"
import { formatters } from "@/lib/utils"

const waterQualityData = Array.from({ length: 60 }, (_, i) => ({
  doc: i + 1,
  "pH AM": 7.8 + Math.random() * 0.4,
  "pH PM": 8.0 + Math.random() * 0.3,
  "Temp AM": 28 + Math.random() * 1.5,
  "Temp PM": 29 + Math.random() * 2,
}))
interface MainChart {
  date: string;
  Round_1: number;
  Round_2: number;
  Round_3: number;
  Mortality: number | null;
}

const logisticGrowth = (day: number, maxWeight: number, steepness: number, midpoint: number) => {
  return maxWeight / (1 + Math.exp(-steepness * (day - midpoint)));
};

const data_dt: MainChart[] = Array.from({ length: 120 }, (_, i) => {
  const day = i + 1;

  const dailyMortality = Math.random() < 0.3 ? Math.floor(Math.random() * 10) : null;

  return {
    date: `DoC ${day}`,
    Round_1: parseFloat(logisticGrowth(day, 28, 0.1, 70).toFixed(2)),
    Round_2: parseFloat(logisticGrowth(day, 22, 0.15, 60).toFixed(2)),
    Round_3: parseFloat(logisticGrowth(day, 35, 0.08, 80).toFixed(2)),
    Mortality: dailyMortality,
  };
});

export default function Monitoring() {
  return (
    <section aria-label="App Monitoring">
      <div className="flex flex-col items-center justify-between gap-2 p-6 sm:flex-row"></div>

      <div className="border-t border-gray-200 p-6 dark:border-gray-800">
        <div className="flex flex-col justify-between p-0">
          <div>
            <dt className="text-lg font-semibold text-gray-900 dark:text-gray-50">
              ภาพรวมการเลี้ยง (Growth & Mortality)
            </dt>
            <dd className="mt-1 text-sm/6 text-gray-500 dark:text-gray-500">
              อัตราการเติบโต (ADG) และจำนวนกุ้งตายรายวัน
            </dd>
            <div className="flex pt-6  flex-col justify-between p-0">

              <ComboChart
                data={data_dt}
                index="date"
                enableBiaxial={true}
                barSeries={{
                  categories: ["Mortality"],
                  colors: ["lightGray"],
                  showYAxis: false,
                }}
                lineSeries={{
                  categories: ["Round_1", "Round_2", "Round_3"],
                  colors: ["blue", "gray", "lightGray",],
                  showYAxis: false,
                  yAxisLabel: "น้ำหนัก (g)",
                  strokeWidth: 10,
                }}
                customTooltip={CustomTooltip2}
              />
            </div>
          </div>
        </div>
      </div>

      <dl className="grid grid-cols-1 gap-x-14 gap-y-10 border-t border-gray-200 p-6 md:grid-cols-2 dark:border-gray-800">
        <div className="flex flex-col justify-between p-0">
          <div>
            <dt className="text-sm font-semibold text-gray-900 dark:text-gray-50">
              Biomass(Ton) VS MBW
            </dt>
            <dd className="mt-0.5 text-sm/6 text-gray-500 dark:text-gray-500">
              Biomass(kg.) & MBW over time grouped by period
            </dd>
          </div>
          <BarChart
            data={dataChart}
            index="date"
            categories={["Biomass", "MBW"]}
            colors={["blue", "lightGray"]}
            yAxisWidth={45}
            customTooltip={CustomTooltip}
            yAxisLabel="Biomass VS MBW"
            barCategoryGap="20%"
            valueFormatter={(value) => formatters.unit(value)}
            className="mt-4 hidden h-60 md:block"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <dt className="text-sm font-semibold text-gray-900 dark:text-gray-50">
              Mg2+
            </dt>
            <dd className="mt-0.5 text-sm/6 text-gray-500 dark:text-gray-500">
              Mg2+ compared to Alk for given month
            </dd>
          </div>
          <ComboChart
            data={dataChart2}
            index="date"
            enableBiaxial={true}
            barSeries={{
              categories: ["Mg2"],
              yAxisLabel: "Number of Mg2+ / Deal size ()",
            }}
            lineSeries={{
              categories: ["Alk"],
              colors: ["lightGray"],
              showYAxis: false,
            }}
            customTooltip={CustomTooltip2}
            className="mt-4 hidden h-60 md:block"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <dt className="text-sm font-semibold text-gray-900 dark:text-gray-50">
              Feed Distribution
            </dt>
            <dd className="mt-0.5 text-sm/6 text-gray-500 dark:text-gray-500">
              Distribution of Feed over time
            </dd>
          </div>
          <BarChart
            data={dataChart3}
            index="date"
            categories={["Std", "Feed"]}
            colors={["emerald", "lightEmerald"]}
            customTooltip={CustomTooltip3}
            type="percent"
            yAxisWidth={55}
            yAxisLabel="Kg"
            barCategoryGap="30%"
            className="mt-4 hidden h-60 md:block"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <dt className="text-sm font-semibold text-gray-900 dark:text-gray-50">
              Salinity
            </dt>
            <dd className="mt-0.5 text-sm/6 text-gray-500 dark:text-gray-500">
              Salinity level measured over time
            </dd>
          </div>
          <ConditionalBarChart
            data={dataChart4}
            index="date"
            categories={["Sanity"]}
            colors={["orange"]}
            customTooltip={CustomTooltip4}
            yAxisWidth={55}
            yAxisLabel="Salinity (ppt)"
            barCategoryGap="30%"
            className="mt-4 hidden h-60 md:block"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <dt className="text-sm font-semibold text-gray-900 dark:text-gray-50">
              pH
            </dt>
            <dd className="mt-0.5 text-sm/6 text-gray-500 dark:text-gray-500">
              ค่า pH ของน้ำ ช่วงเช้า (AM) และเย็น (PM)
            </dd>
          </div>
          <LineChart
            data={waterQualityData}
            index="doc"
            categories={["pH AM", "pH PM"]}
            colors={["amber", "amber"]}
            yAxisWidth={45}
            className="mt-4 h-60"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <dt className="text-sm font-semibold text-gray-900 dark:text-gray-50">
              Temperature
            </dt>
            <dd className="mt-0.5 text-sm/6 text-gray-500 dark:text-gray-500">
              อุณหภูมิของน้ำ ช่วงเช้า (AM) และเย็น (PM)
            </dd>
          </div>
          <LineChart
            data={waterQualityData}
            index="doc"
            categories={["Temp AM", "Temp PM"]}
            colors={["indigo", "blue"]}
            yAxisWidth={45}
            valueFormatter={(value) => `${value.toFixed(1)} °C`}
            className="mt-4 h-60"
          />
        </div>
      </dl>
    </section>
  )
}