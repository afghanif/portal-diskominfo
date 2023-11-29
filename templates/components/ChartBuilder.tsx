'use client'

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

type ChartType = "pie" | "bar" | "area" | "line" | "donut" | "radialBar" | "scatter" | "bubble" | "heatmap" | "candlestick" | "boxPlot" | "radar" | "polarArea" | "rangeBar" | "rangeArea" | "treemap" | undefined;
type SeriesType = ApexAxisChartSeries | ApexNonAxisChartSeries | undefined;
interface ChartBuilderProps {
  id: string;
  type: ChartType;
  series: any[];
  categories: any[];
  options: string;
  height?: number | string;
  width?: string | number;
  colors?: string | Array<string>;
}
const defaultColor = ["#CBAACB", "#ABDEE6", "#F3B0C3", "#FF968A", "#FFAEA5", "#D4F0F0", "#8FCACA", "#B6CFB6", "#97C1A9", "#FCB9AA", "#A2E1DB", "#55CBCD"];
const colorPalette1 = ["#5CC8D7", "#B58DB6", "#FF9D8F", "#FF6F61", "#9EE09E", "#FFD966", "#FF7C43", "#FF5A5F", "#A8DBA8", "#58B2DC"];
const colorPalette2 = ["#A2DBDF", "#D6A9DC", "#FFA29E", "#FF7F7C", "#A2D9A6", "#FFD966", "#FF7C43", "#FF5A5F", "#82C0CC", "#55A5B7"];
const colorPalette3 = ["#4CCED1", "#AF8DBF", "#FF7F8E", "#FFB18F", "#6ED9CB", "#FFD966", "#FF7C43", "#FF5A5F", "#99C7C8", "#51A5B2"];


export function ChartBuilder({ id, type, series, categories, options, height = '100%', width = "100%", colors = defaultColor }: ChartBuilderProps) {
  // let chartOptions: ApexCharts.ApexOptions | undefined;
  let chartOption: any | undefined;
  const optionList: any = {
    'dashboardLabelPie': dashboardLabelPie(id, categories, colors),
    'dashboardStackedBar': dashboardStackedBar(id, categories, colors),
    'dashboardNoLabelBar': dashboardNoLabelBar(id, categories, colors),
    'dashboardNoLabelColumn': dashboardNoLabelColumn(id, categories, colors),
    'dashboardMultipleYAxisLine': dashboardMultipleYAxisLine(id, categories, colors),
    'dashboardNoLabelLine': dashboardNoLabelLine(id, categories, colors),
    'statistikTotalBar': statistikTotalBar(id, categories, colors),
    'statistikTotalColumn': statistikTotalColumn(id, categories, colors),
    'statistikStackedColumn': statistikStackedColumn(id, categories, colors),
  };

  chartOption = optionList[options]

  if (!(id && type && chartOption && series)) {
    return <p className="text-muted">Invalid chart options!</p>
  }

  return <ApexChart type={type} options={chartOption} series={series} height={height} width={width} />
}

const dashboardLabelPie = (id: string, categories: any[], colors: string | string[]) => {
  const chartOption = {
    chart: {
      id: id,
    },
    colors: colors,
    labels: categories,
    legend: {
      position: 'bottom'
    },
    dataLabels: {
      dropShadow: {
        enabled: false
      }
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          val = val ? val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : val;
          return val
        }
      }
    }
  };
  return chartOption
}

const dashboardStackedBar = (id: string, categories: any[], colors: string | string[]) => {
  const chartOption = {
    chart: {
      id: id,
      stacked: true
    },
    xaxis: {
      categories: categories,
      labels: {
        formatter: function (val: any) {
          return Math.abs(val);
        }
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '80%',
      },
    },
    colors: colors,
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 1,
      colors: ["#fff"]
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (val: any) {
          val = Math.abs(val)
          val = val ? val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : val;
          return val
        }
      }
    }
  }

  return chartOption
}

const dashboardNoLabelBar = (id: string, categories: any[], colors: string | string[]) => {
  const chartOption = {
    chart: {
      id: id,
    },
    plotOptions: {
      bar: {
        horizontal: true,
      }
    },
    colors: colors,
    dataLabels: {
      enabled: false
    },
    legend: {
      position: 'bottom'
    },
    xaxis: {
      categories: categories,
    },
    tooltip: {
      intersect: false,
      y: {
        formatter: function (val: any) {
          val = val ? val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : val;
          return val
        }
      }
    }
  };
  return chartOption
}

const dashboardNoLabelColumn = (id: string, categories: any[], colors: any) => {
  const chartOption = {
    chart: {
      id: id,
    },
    plotOptions: {
      bar: {
        horizontal: false,
      }
    },
    // colors: ["#38cab3"],
    colors: colors,
    dataLabels: {
      enabled: false
    },
    legend: {
      position: 'bottom'
    },
    xaxis: {
      labels: {
        rotate:0,
        trim: true,
        hideOverlappingLabels: false
      },
      categories: categories,
    },
    tooltip: {
      intersect: false,
      y: {
        formatter: function (val: any) {
          val = val ? val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : val;
          return val
        }
      }
    }
  };
  return chartOption
}

const dashboardMultipleYAxisLine = (id: string, categories: any[], colors: string | string[]) => {
  const chartOption = {
    chart: {
      id: id,
      stacked: false,
      zoom: {
        enabled: false
      }
    },
    colors: colors,
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    markers: {
      size: 6,
    },
    xaxis: {
      categories: categories,
    },
    yaxis: [
      {
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#ABDEE6"
        },
        labels: {
          style: {
            colors: "#ABDEE6"
          }
        },
        title: {
          text: "Jiwa",
          style: {
            color: "#ABDEE6"
          }
        }
      },
      {
        opposite: true,
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#FF968A"
        },
        labels: {
          style: {
            colors: "#FF968A"
          }
        },
        title: {
          text: "Persentase",
          style: {
            color: "#FF968A"
          }
        }
      }
    ],
    tooltip: {
      y: {
        formatter: function (val: any) {
          val = val ? val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : val;
          return val
        }
      }
    },
  };

  return chartOption
}

const dashboardNoLabelLine = (id: string, categories: any[], colors: string | string[]) => {
  const chartOption = {
    chart: {
      id: id,
      zoom: {
        enabled: false
      }
    },
    colors: colors,
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    markers: {
      size: 6,
    },
    xaxis: {
      categories: categories,
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          val = val ? val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : val;
          return val
        }
      }
    },
  };

  return chartOption
}

const statistikTotalColumn = (id: string, categories: any[], colors: string | string[] ) => {
  const chartOption = {
    chart: {
      id: id,
      zoom: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        dataLabels: {
          position: 'top',
        },
        horizontal: false,
      }
    },
    dataLabels: {
      enabled: true,
      offsetY: -20,
      offsetX:0,
      style: {
        colors: ["var(--default-text-color)"]
      },
      formatter: function (val: any) {
        val = val ? val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : val;
        return val
      }
    },
    colors: colors,
    xaxis: {
      labels: {
        rotate:0,
        trim: true,
        hideOverlappingLabels: false
      },
      categories: categories,
    },
    tooltip: {
      intersect: false,
      y: {
        formatter: function (val: any) {
          val = val ? val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : val;
          return val
        }
      }
    }
  }

  return chartOption
}

const statistikTotalBar = (id: string, categories: any[], colors: string | string[]) => {
  const option = {
    chart: {
      id: id
    },
    plotOptions: {
      bar: {
        dataLabels: {
          position: 'top',
        },
        horizontal: true,
      }
    },
    dataLabels: {
      enabled: true,
      offsetY: 0,
      offsetX: 45,
      style: {
        colors: ["var(--default-text-color)"]
      },
      formatter: function (val: any) {
        val = val ? val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : val;
        return val
      }
    },
    colors: colors,
    xaxis: {
      labels: {
        rotate:0,
        // trim: true,
        hideOverlappingLabels: false
      },
      categories: categories,
    },
    tooltip: {
      intersect: false,
      y: {
        formatter: function (val: any) {
          val = val ? val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : val;
          return val
        }
      }
    }
  }

  return option
}

const statistikStackedColumn = (id: string, categories: any[], colors: string | string[]) => {
  const chartOption = {
    chart: {
      id: id,
      stacked: true
    },
    xaxis: {
      labels: {
        rotate:0,
        trim: true,
        hideOverlappingLabels: false
      },
      categories: categories,
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (val: any) {
          val = val ? val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : val;
          return val
        }
      }
    },
    colors: colors,
    dataLabels: {
      enabled: true,
      offsetY: 0,
      offsetX:0,
      style: {
        fontSize: '9px',
        colors: ["var(--default-text-color)"]
      },
      formatter: function (val: any) {
        val = val ? val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : val;
        return val
      }
    },
  }
  return chartOption
}