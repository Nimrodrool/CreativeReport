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
    <div className="w-full max-w-6xl p-4">
      <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-sm text-yellow-800">Analysis of ads containing "regular" with $50,000+ spend (Excluding Q4, sale, seasonal)</p>
      </div>

      {/* Hit Rate Summary */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800">2022 Hit Rate</h3>
          <p className="text-3xl font-bold text-blue-900">3.1%</p>
          <p className="text-sm text-blue-600">20 of 655 ads</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800">2023 Hit Rate</h3>
          <p className="text-3xl font-bold text-blue-900">4.0%</p>
          <p className="text-sm text-blue-600">39 of 983 ads</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800">2024 Hit Rate</h3>
          <p className="text-3xl font-bold text-blue-900">1.7%</p>
          <p className="text-sm text-blue-600">16 of 956 ads</p>
        </div>
      </div>
      
      {/* Original Chart */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Total vs High-Spending Regular Ads</h3>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={adData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
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

      {/* Top 5 Spenders Analysis */}
      <div className="mt-8 mb-8">
        <h3 className="text-xl font-semibold mb-4">Top 5 Regular Ads Analysis</h3>
        
        <div className="space-y-8">
          {/* 2022 */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-lg font-semibold mb-2">2022</h4>
            <p className="text-lg mb-2">Total Spend (Top 5): {formatCurrency(602647.06)}</p>
            <p className="mb-2 text-sm text-gray-600">Launched: April (5 successful ads), August (3 successful ads), December (3 successful ads), May/July (2 each)</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Elisheva Ariel - No Ordinary: {formatCurrency(181505.35)} (December)</li>
              <li>Elisheva Ariel - No Ordinary: {formatCurrency(110740.01)} (December)</li>
              <li>UGC Mixed Shahar: {formatCurrency(106207.18)} (October)</li>
              <li>EPL32-C: {formatCurrency(105077.82)} (August)</li>
              <li>Sivan Adir - Fill Your Home: {formatCurrency(99116.70)} (November)</li>
            </ul>
          </div>

          {/* 2023 */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-lg font-semibold mb-2">2023</h4>
            <p className="text-lg mb-2">Total Spend (Top 5): {formatCurrency(2783064.93)}</p>
            <p className="mb-2 text-sm text-gray-600">Launched: December (9 successful ads), January (6 successful ads), February (4 successful ads), Multiple months with 3 successful ads</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Sivan Inbar - Fiddle Unbox: {formatCurrency(1135672.81)} (March)</li>
              <li>Basic Compilation 6: {formatCurrency(478477.76)} (August)</li>
              <li>EIIT - Concept B: {formatCurrency(464335.70)} (July)</li>
              <li>Sivan Inbar - One Shot: {formatCurrency(453921.49)} (August)</li>
              <li>Einav's Home - Place: {formatCurrency(250657.17)} (December)</li>
            </ul>
          </div>

          {/* 2024 */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-lg font-semibold mb-2">2024</h4>
            <p className="text-lg mb-2">Total Spend (Top 5): {formatCurrency(1920355.61)}</p>
            <p className="mb-2 text-sm text-gray-600">Launched: January (3 successful ads), August (3 successful ads), July/September/October (2 each)</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>No Ordinary Dup - Upside: {formatCurrency(667847.59)} (January)</li>
              <li>Dan Fiddle - One Plant: {formatCurrency(523688.14)} (March)</li>
              <li>Upside Kid - How: {formatCurrency(276809.18)} (August)</li>
              <li>Hattie Cooler - Water Short: {formatCurrency(248629.61)} (May)</li>
              <li>Monika Kitchen - Place: {formatCurrency(203381.09)} (April)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quarterly Breakdown */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Quarterly Performance Breakdown</h2>
        {[2022, 2023, 2024].map(year => (
          <div key={year} className="mb-8">
            <h3 className="text-xl font-semibold mb-4">{year} Quarterly Performance</h3>
            <div className="grid grid-cols-4 gap-4">
              {quarterlyData[year].map((quarter) => (
                <div key={quarter.quarter} className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
                  <h4 className="text-lg font-semibold text-blue-800">{quarter.quarter}</h4>
                  <p className="text-3xl font-bold text-blue-900">{quarter.hitRate}%</p>
                  <p className="text-sm text-blue-600">{quarter.successfulAds} of {quarter.totalAds} ads</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Naming Patterns Analysis */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Ad Naming Patterns Analysis</h2>
        
        {/* Top Performing Patterns */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Top Performing Ad Name Patterns</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800">Place</h4>
                <p className="text-2xl font-bold text-blue-900">7.2%</p>
                <p className="text-sm text-blue-600">5 of 69 ads successful</p>
                <p className="text-sm text-blue-600">Total spend: {formatCurrency(666822)}</p>
                <div className="mt-2 space-y-1 text-sm">
                  <p className="font-semibold">Top 5:</p>
                  <p>1. Einav's Home Place ({formatCurrency(250657)})</p>
                  <p>2. Monika Kitchen Place ({formatCurrency(203381)})</p>
                  <p>3. 3 Reasons Place ({formatCurrency(84439)})</p>
                  <p>4. 3 Reasons Place - V2 ({formatCurrency(78028)})</p>
                  <p>5. Einav's Home Place - V2 ({formatCurrency(50316)})</p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800">Upside</h4>
                <p className="text-2xl font-bold text-blue-900">6.7%</p>
                <p className="text-sm text-blue-600">12 of 179 ads successful</p>
                <p className="text-sm text-blue-600">Total spend: {formatCurrency(2700064)}</p>
                <div className="mt-2 space-y-1 text-sm">
                  <p className="font-semibold">Top 5:</p>
                  <p>1. No Ordinary Dup Upside ({formatCurrency(667848)})</p>
                  <p>2. EIIT Concept B UpsideDown ({formatCurrency(464336)})</p>
                  <p>3. Sivan Inbar OneShot UpsideDown ({formatCurrency(453921)})</p>
                  <p>4. Upside Kid How ({formatCurrency(276809)})</p>
                  <p>5. Elish A Ton Upside ({formatCurrency(211468)})</p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800">Unbox</h4>
                <p className="text-2xl font-bold text-blue-900">6.1%</p>
                <p className="text-sm text-blue-600">11 of 181 ads successful</p>
                <p className="text-sm text-blue-600">Total spend: {formatCurrency(2245454)}</p>
                <div className="mt-2 space-y-1 text-sm">
                  <p className="font-semibold">Top 5:</p>
                  <p>1. Sivan Inbar Fiddle Unbox ({formatCurrency(1135673)})</p>
                  <p>2. Like a Jungle Unbox ({formatCurrency(203792)})</p>
                  <p>3. Elisheva Ariel No Ordinary Unbox ({formatCurrency(154559)})</p>
                  <p>4. Elisheva Ariel No Ordinary Unbox 9:16 ({formatCurrency(151885)})</p>
                  <p>5. Elisheva Ariel No Ordinary Unbox ({formatCurrency(123320)})</p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800">Hack</h4>
                <p className="text-2xl font-bold text-blue-900">5.2%</p>
                <p className="text-sm text-blue-600">24 of 460 ads successful</p>
                <p className="text-sm text-blue-600">Total spend: {formatCurrency(4269448)}</p>
                <div className="mt-2 space-y-1 text-sm">
                  <p className="font-semibold">Top 5:</p>
                  <p>1. Sivan Inbar Fiddle Unbox ({formatCurrency(1135673)})</p>
                  <p>2. EIIT Concept B UpsideDown ({formatCurrency(464336)})</p>
                  <p>3. Sivan Inbar OneShot UpsideDown ({formatCurrency(453921)})</p>
                  <p>4. Einav's Home Place ({formatCurrency(250657)})</p>
                  <p>5. Elisheva Ariel No Ordinary ({formatCurrency(181505)})</p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800">Compilation</h4>
                <p className="text-2xl font-bold text-blue-900">5.1%</p>
                <p className="text-sm text-blue-600">2 of 39 ads successful</p>
                <p className="text-sm text-blue-600">Total spend: {formatCurrency(712167)}</p>
                <div className="mt-2 space-y-1 text-sm">
                  <p className="font-semibold">Top 2:</p>
                  <p>1. Basic Compilation 6 ({formatCurrency(478478)})</p>
                  <p>2. Basic Compilation 3 ({formatCurrency(233689)})</p>
                </div>
              </div>
            </div>
          </div>

          {/* Other Notable Groups */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Other Notable Groups</h3>
            <div className="space-y-3">
              <p><span className="font-semibold">EPCreative:</span> Largest volume with 1,755 ads, 53 successes (3.0% hit rate)</p>
              <p><span className="font-semibold">Fiddle:</span> Highest average spend per success ({formatCurrency(590538)})</p>
              <p><span className="font-semibold">Creator:</span> 1.9% success rate (3 hits from 160 ads)</p>
              <p><span className="font-semibold">UGC:</span> 2.2% success rate (2 hits from 89 attempts)</p>
            </div>
          </div>

          {/* Top Creators/Concepts */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Top Creators by Volume</h3>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>HackSivanInbar (119 ads)</li>
              <li>Hack (101 standalone ads)</li>
              <li>Hack923 (58 ads)</li>
              <li>HackSivanAdir (44 ads)</li>
              <li>HackElishevaAriel (41 ads)</li>
              <li>NRTV (40 ads)</li>
            </ol>
          </div>

          {/* Best Pattern Combinations */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Most Successful Pattern Combinations</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Hack + Unbox + Fiddle</li>
              <li>Upside + Place</li>
              <li>EPCreative + Hack + Unbox</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegularAdsAnalysis;