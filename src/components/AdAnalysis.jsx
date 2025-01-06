import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const adData = [
  {
    year: 2022,
    totalAds: 655,
    highSpendingAds: 20,
    percentage: "3.1"
  },
  {
    year: 2023,
    totalAds: 983,
    highSpendingAds: 39,
    percentage: "4.0"
  },
  {
    year: 2024,
    totalAds: 956,
    highSpendingAds: 16,
    percentage: "1.7"
  }
];

const quarterlyData = {
  2022: [
    { quarter: "Q1", hitRate: 0.0, totalAds: 67, successfulAds: 0 },
    { quarter: "Q2", hitRate: 5.9, totalAds: 135, successfulAds: 8 },
    { quarter: "Q3", hitRate: 4.5, totalAds: 156, successfulAds: 7 },
    { quarter: "Q4", hitRate: 1.7, totalAds: 297, successfulAds: 5 }
  ],
  2023: [
    { quarter: "Q1", hitRate: 5.9, totalAds: 219, successfulAds: 13 },
    { quarter: "Q2", hitRate: 2.1, totalAds: 188, successfulAds: 4 },
    { quarter: "Q3", hitRate: 2.5, totalAds: 321, successfulAds: 8 },
    { quarter: "Q4", hitRate: 5.5, totalAds: 255, successfulAds: 14 }
  ],
  2024: [
    { quarter: "Q1", hitRate: 1.9, totalAds: 260, successfulAds: 5 },
    { quarter: "Q2", hitRate: 0.9, totalAds: 230, successfulAds: 2 },
    { quarter: "Q3", hitRate: 2.0, totalAds: 349, successfulAds: 7 },
    { quarter: "Q4", hitRate: 1.7, totalAds: 117, successfulAds: 2 }
  ]
};

const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const RegularAdsAnalysis = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-2 sm:p-4">
      <div className="mb-4 p-3 sm:p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-xs sm:text-sm text-yellow-800">
          Analysis of ads containing "regular" with $50,000+ spend (Excluding Q4, sale, seasonal)
        </p>
      </div>

      {/* Hit Rate Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
        {adData.map((data) => (
          <div key={data.year} className="bg-blue-50 p-3 sm:p-4 rounded-lg border-2 border-blue-200">
            <h3 className="text-base sm:text-lg font-semibold text-blue-800">{data.year} Hit Rate</h3>
            <p className="text-2xl sm:text-3xl font-bold text-blue-900">{data.percentage}%</p>
            <p className="text-xs sm:text-sm text-blue-600">
              {data.highSpendingAds} of {data.totalAds} ads
            </p>
          </div>
        ))}
      </div>

      {/* Bar Chart */}
      <div className="mb-6 sm:mb-8">
        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
          Total vs High-Spending Regular Ads
        </h3>
        <div className="h-72 sm:h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={adData}
              margin={{
                top: 20,
                right: 20,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="totalAds" name="Total Ads" fill="#8884d8" />
              <Bar yAxisId="right" dataKey="highSpendingAds" name="Ads >$50k" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quarterly Breakdown */}
      <div className="mt-12">
        <h2 className="text-xl sm:text-2xl font-bold mb-6">Quarterly Performance Breakdown</h2>
        {[2022, 2023, 2024].map((year) => (
          <div key={year} className="mb-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">{year} Quarterly Performance</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {quarterlyData[year].map((quarter) => (
                <div
                  key={quarter.quarter}
                  className="bg-blue-50 p-3 sm:p-4 rounded-lg border-2 border-blue-200"
                >
                  <h4 className="text-base sm:text-lg font-semibold text-blue-800">{quarter.quarter}</h4>
                  <p className="text-2xl sm:text-3xl font-bold text-blue-900">{quarter.hitRate}%</p>
                  <p className="text-sm text-blue-600">
                    {quarter.successfulAds} of {quarter.totalAds} ads
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegularAdsAnalysis;
