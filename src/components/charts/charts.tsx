import { numberFormatter } from '@/utils/helpers';
import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

type Chart = {
  options: ApexCharts.ApexOptions;
  series: any;
};

type ApexChartProps = {
  chartData: any;
  type: string;
};

const ChartComponent = ({ options, series }: Chart) => {
  return (
    <div>
      <ReactApexChart options={options} series={series} type={'line'} height={350} />
    </div>
  );
};

const ApexChart = ({ chartData, type }: ApexChartProps) => {
  const session = useSession();

  const engagementSeries = [
    {
      name: 'Shares',
      data: chartData?.engagement?.map((item: any) => [new Date(item.date), item.shares]) || [],
    },
    {
      name: 'Likes',
      data: chartData?.engagement?.map((item: any) => [new Date(item.date), item.likes]) || [],
    },
    {
      name: 'Comments',
      data: chartData?.engagement?.map((item: any) => [new Date(item.date), item.comments]) || [],
    },
  ];

  const videoSeries = [
    {
      name: 'Views',
      data: chartData?.video_views?.map((item: any) => [new Date(item.date), item.value]) || [],
    },
  ];

  const totalPostSeries = [
    {
      name: 'Views',
      data: chartData?.posts?.map((item: any) => [new Date(item.date), item.value]) || [],
    },
  ];

  const subscribers = [
    {
      name: 'Subscribe',
      data:
        chartData?.subscribers?.map((item: any) => [new Date(item.date), item.subscribed]) || [],
    },
    {
      name: 'Unsubscribe',
      data:
        chartData?.subscribers?.map((item: any) => [new Date(item.date), item.unsubscribed]) || [],
    },
  ];

  const videoViews = [
    {
      name: 'Video Views',
      data: chartData?.video_views?.map((item: any) => [new Date(item.date), item.value]) || [],
    },
  ];

  // const adImpressions = [
  //   {
  //     name: 'Ad Impressions',
  //     data: chartData?.ad_impressions?.map((item: any) => [new Date(item.date), item.value]),
  //   },
  // ];

  const series = [
    {
      name: 'Desktops',
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
    {
      name: 'Desktops',
      data: [12, 46, 32, 71, 59, 82, 19, 51, 128],
    },
    {
      name: 'Desktops',
      data: [23, 21, 55, 71, 89, 69, 35, 31, 18],
    },
  ];

  const options: ApexCharts.ApexOptions = {
    chart: {
      id: 'basic-bar',

      zoom: {
        enabled: false,
        autoScaleYaxis: true,
      },
      selection: {
        enabled: false,
      },
      toolbar: {
        show: false,
        autoSelected: 'pan',
        offsetY: 0,
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    // title: {
    //   text: 'Engagement',
    //   align: 'left',
    // },
    fill: {
      colors: ['#006666', '#00CCCC', '#00FDFE'],
    },
    noData: {
      text: 'Metrics Unavailable',
      align: 'center',
      verticalAlign: 'middle',
      style: {
        color: '#2c2c2c',
        fontSize: '16px',
      },
    },
    legend: {
      show: true,
      fontSize: '12px',
      fontWeight: 500,
      position: 'top',
      offsetY: 5,
      horizontalAlign: 'right',
      showForSingleSeries: false,
      markers: {
        fillColors: ['#006666', '#00CCCC', '#00FDFE'],
      },
    },
    grid: {
      borderColor: '#EBF0FF',
      padding: {
        bottom: 0,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
      colors: ['#006666', '#00CCCC', '#00FDFE'],
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
      colors: ['#7D6AEF'],
    },
    xaxis: {
      type: 'datetime',
      tickAmount: 6,
      labels: {
        rotate: 0,
        style: {
          colors: '#2c2c2c',
        },
        datetimeFormatter: {
          year: 'yyyy',
          month: "MMM 'yy",
          day: 'dd MMM',
          hour: 'h:mm TT',
        },
      },
    },
    yaxis: {
      forceNiceScale: true,
      showForNullSeries: false,
      labels: {
        style: {
          colors: ['#000000'],
          fontSize: '10px',
        },
        formatter: function (val: any) {
          return val && numberFormatter(val?.toFixed(0));
        },
      },
    },
    tooltip: {
      enabled: !session?.data ? false : true,
      marker: {
        show: false,
      },
      x: {
        format: 'dd MMM yyyy',
      },
    },
  };

  return (
    <>
      <ReactApexChart options={options} series={series} type={'line'} height={350} />
    </>
  );
};

export default ApexChart;
