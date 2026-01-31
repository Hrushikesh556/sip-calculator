import React, { useState, useMemo, useCallback } from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
} from 'chart.js';
import AdBanner from './AdBanner';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
);

type CalculatorType = 'sip' | 'stepup' | 'lumpsum' | 'swp';

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  icon: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ active, onClick, children, icon }) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center space-x-1 sm:space-x-2 px-2 sm:px-4 lg:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm lg:text-base transition-all duration-300 flex-1 sm:flex-none ${
      active
        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-[1.02]'
        : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-blue-600 border border-gray-200'
    }`}
  >
    <span className="hidden xs:inline">{icon}</span>
    <span className="truncate">{children}</span>
  </button>
);

interface SliderInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  prefix?: string;
  suffix?: string;
  id: string;
}

const SliderInput: React.FC<SliderInputProps> = ({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  prefix = '',
  suffix = '',
  id,
}) => {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="mb-4 sm:mb-6">
      <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center mb-2 sm:mb-3 gap-1 xs:gap-0">
        <label 
          htmlFor={id}
          className="text-gray-700 font-medium text-sm sm:text-base"
        >
          {label}
        </label>
        <div className="flex items-center bg-blue-50 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 w-fit">
          <span 
            className="text-blue-700 font-bold text-sm sm:text-lg"
            aria-live="polite"
            aria-atomic="true"
          >
            {prefix}{value.toLocaleString('en-IN')}{suffix}
          </span>
        </div>
      </div>
      <div className="relative">
        <input
          id={id}
          name={id}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          aria-label={`${label}: ${prefix}${value.toLocaleString('en-IN')}${suffix}`}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          aria-valuetext={`${prefix}${value.toLocaleString('en-IN')}${suffix}`}
          className="w-full h-2 sm:h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          style={{
            background: `linear-gradient(to right, #3B82F6 0%, #6366F1 ${percentage}%, #E5E7EB ${percentage}%, #E5E7EB 100%)`,
          }}
        />
        <div className="flex justify-between mt-1 sm:mt-2" aria-hidden="true">
          <span className="text-[10px] sm:text-xs text-gray-600">{prefix}{min.toLocaleString('en-IN')}{suffix}</span>
          <span className="text-[10px] sm:text-xs text-gray-600">{prefix}{max.toLocaleString('en-IN')}{suffix}</span>
        </div>
      </div>
    </div>
  );
};

interface ResultCardProps {
  title: string;
  value: number;
  color: 'blue' | 'green' | 'purple' | 'orange';
  icon: React.ReactNode;
}

const ResultCard: React.FC<ResultCardProps> = ({ title, value, color, icon }) => {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600 shadow-blue-200',
    green: 'from-green-500 to-green-600 shadow-green-200',
    purple: 'from-purple-500 to-purple-600 shadow-purple-200',
    orange: 'from-orange-500 to-orange-600 shadow-orange-200',
  };

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color]} rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 text-white shadow-lg`}>
      <div className="flex items-center justify-between mb-2 sm:mb-3">
        <span className="text-white/80 text-xs sm:text-sm font-medium">{title}</span>
        <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-white/20 rounded-full flex items-center justify-center">
          {icon}
        </div>
      </div>
      <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold">
        ₹{value.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
      </p>
    </div>
  );
};

const Calculator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CalculatorType>('sip');
  
  // SIP State
  const [sipMonthly, setSipMonthly] = useState(10000);
  const [sipReturn, setSipReturn] = useState(12);
  const [sipYears, setSipYears] = useState(10);
  
  // Step-Up SIP State
  const [stepupMonthly, setStepupMonthly] = useState(10000);
  const [stepupReturn, setStepupReturn] = useState(12);
  const [stepupYears, setStepupYears] = useState(10);
  const [stepupPercent, setStepupPercent] = useState(10);
  
  // Lumpsum State
  const [lumpsumAmount, setLumpsumAmount] = useState(500000);
  const [lumpsumReturn, setLumpsumReturn] = useState(12);
  const [lumpsumYears, setLumpsumYears] = useState(10);
  
  // SWP State
  const [swpInitial, setSwpInitial] = useState(1000000);
  const [swpWithdrawal, setSwpWithdrawal] = useState(10000);
  const [swpReturn, setSwpReturn] = useState(8);
  const [swpYears, setSwpYears] = useState(20);

  // SIP Calculation
  const sipResults = useMemo(() => {
    const P = sipMonthly;
    const r = sipReturn / 12 / 100;
    const n = sipYears * 12;
    const M = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const invested = P * n;
    const returns = M - invested;
    
    const yearlyData = [];
    for (let year = 1; year <= sipYears; year++) {
      const months = year * 12;
      const value = P * ((Math.pow(1 + r, months) - 1) / r) * (1 + r);
      yearlyData.push({
        year,
        invested: P * months,
        value: Math.round(value),
      });
    }
    
    return { invested, returns, total: M, yearlyData };
  }, [sipMonthly, sipReturn, sipYears]);

  // Step-Up SIP Calculation
  const stepupResults = useMemo(() => {
    const r = stepupReturn / 12 / 100;
    let totalValue = 0;
    let totalInvested = 0;
    let currentMonthly = stepupMonthly;
    const yearlyData = [];
    
    for (let year = 1; year <= stepupYears; year++) {
      for (let month = 1; month <= 12; month++) {
        totalInvested += currentMonthly;
        totalValue = (totalValue + currentMonthly) * (1 + r);
      }
      yearlyData.push({
        year,
        invested: Math.round(totalInvested),
        value: Math.round(totalValue),
        monthlyContribution: Math.round(currentMonthly),
      });
      currentMonthly = currentMonthly * (1 + stepupPercent / 100);
    }
    
    return {
      invested: totalInvested,
      returns: totalValue - totalInvested,
      total: totalValue,
      yearlyData,
    };
  }, [stepupMonthly, stepupReturn, stepupYears, stepupPercent]);

  // Lumpsum Calculation
  const lumpsumResults = useMemo(() => {
    const P = lumpsumAmount;
    const r = lumpsumReturn / 100;
    const n = lumpsumYears;
    const M = P * Math.pow(1 + r, n);
    
    const yearlyData = [];
    for (let year = 1; year <= n; year++) {
      const value = P * Math.pow(1 + r, year);
      yearlyData.push({
        year,
        invested: P,
        value: Math.round(value),
      });
    }
    
    return {
      invested: P,
      returns: M - P,
      total: M,
      yearlyData,
    };
  }, [lumpsumAmount, lumpsumReturn, lumpsumYears]);

  // SWP Calculation
  const swpResults = useMemo(() => {
    const r = swpReturn / 12 / 100;
    let balance = swpInitial;
    let totalWithdrawn = 0;
    const yearlyData = [];
    let depleted = false;
    
    for (let year = 1; year <= swpYears; year++) {
      let yearEndBalance = balance;
      for (let month = 1; month <= 12; month++) {
        if (yearEndBalance <= 0) {
          depleted = true;
          break;
        }
        yearEndBalance = yearEndBalance * (1 + r) - swpWithdrawal;
        totalWithdrawn += swpWithdrawal;
      }
      yearlyData.push({
        year,
        withdrawn: Math.round(totalWithdrawn),
        balance: Math.max(0, Math.round(yearEndBalance)),
      });
      balance = yearEndBalance;
      if (depleted) break;
    }
    
    return {
      initial: swpInitial,
      totalWithdrawn: Math.round(totalWithdrawn),
      remaining: Math.max(0, Math.round(balance)),
      yearlyData,
      depleted,
    };
  }, [swpInitial, swpWithdrawal, swpReturn, swpYears]);

  const getChartData = useCallback(() => {
    const commonOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top' as const,
          labels: {
            usePointStyle: true,
            padding: 10,
            font: { size: 11 },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: (value: number) => '₹' + (value / 100000).toFixed(1) + 'L',
            font: { size: 10 },
          },
          grid: { color: 'rgba(0,0,0,0.05)' },
        },
        x: {
          grid: { display: false },
          ticks: { font: { size: 10 } },
        },
      },
    };

    switch (activeTab) {
      case 'sip':
        return {
          data: {
            labels: sipResults.yearlyData.map((d) => `Yr ${d.year}`),
            datasets: [
              {
                label: 'Total Value',
                data: sipResults.yearlyData.map((d) => d.value),
                borderColor: '#6366F1',
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                fill: true,
                tension: 0.4,
              },
              {
                label: 'Invested',
                data: sipResults.yearlyData.map((d) => d.invested),
                borderColor: '#10B981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                fill: true,
                tension: 0.4,
              },
            ],
          },
          options: commonOptions,
        };
      case 'stepup':
        return {
          data: {
            labels: stepupResults.yearlyData.map((d) => `Yr ${d.year}`),
            datasets: [
              {
                label: 'Total Value',
                data: stepupResults.yearlyData.map((d) => d.value),
                borderColor: '#8B5CF6',
                backgroundColor: 'rgba(139, 92, 246, 0.1)',
                fill: true,
                tension: 0.4,
              },
              {
                label: 'Invested',
                data: stepupResults.yearlyData.map((d) => d.invested),
                borderColor: '#F59E0B',
                backgroundColor: 'rgba(245, 158, 11, 0.1)',
                fill: true,
                tension: 0.4,
              },
            ],
          },
          options: commonOptions,
        };
      case 'lumpsum':
        return {
          data: {
            labels: lumpsumResults.yearlyData.map((d) => `Yr ${d.year}`),
            datasets: [
              {
                label: 'Total Value',
                data: lumpsumResults.yearlyData.map((d) => d.value),
                borderColor: '#3B82F6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                fill: true,
                tension: 0.4,
              },
              {
                label: 'Principal',
                data: lumpsumResults.yearlyData.map((d) => d.invested),
                borderColor: '#10B981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                fill: true,
                tension: 0.4,
                borderDash: [5, 5],
              },
            ],
          },
          options: commonOptions,
        };
      case 'swp':
        return {
          data: {
            labels: swpResults.yearlyData.map((d) => `Yr ${d.year}`),
            datasets: [
              {
                label: 'Remaining Balance',
                data: swpResults.yearlyData.map((d) => d.balance),
                borderColor: '#EF4444',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                fill: true,
                tension: 0.4,
              },
              {
                label: 'Total Withdrawn',
                data: swpResults.yearlyData.map((d) => d.withdrawn),
                borderColor: '#22C55E',
                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                fill: true,
                tension: 0.4,
              },
            ],
          },
          options: commonOptions,
        };
    }
  }, [activeTab, sipResults, stepupResults, lumpsumResults, swpResults]);

  const getDoughnutData = useCallback(() => {
    switch (activeTab) {
      case 'sip':
        return {
          labels: ['Invested', 'Returns'],
          datasets: [{
            data: [sipResults.invested, sipResults.returns],
            backgroundColor: ['#10B981', '#6366F1'],
            borderWidth: 0,
          }],
        };
      case 'stepup':
        return {
          labels: ['Invested', 'Returns'],
          datasets: [{
            data: [stepupResults.invested, stepupResults.returns],
            backgroundColor: ['#F59E0B', '#8B5CF6'],
            borderWidth: 0,
          }],
        };
      case 'lumpsum':
        return {
          labels: ['Principal', 'Returns'],
          datasets: [{
            data: [lumpsumResults.invested, lumpsumResults.returns],
            backgroundColor: ['#10B981', '#3B82F6'],
            borderWidth: 0,
          }],
        };
      case 'swp':
        return {
          labels: ['Withdrawn', 'Remaining'],
          datasets: [{
            data: [swpResults.totalWithdrawn, swpResults.remaining],
            backgroundColor: ['#22C55E', '#EF4444'],
            borderWidth: 0,
          }],
        };
    }
  }, [activeTab, sipResults, stepupResults, lumpsumResults, swpResults]);

  const chartData = getChartData();
  const doughnutData = getDoughnutData();

  const renderInputs = () => {
    switch (activeTab) {
      case 'sip':
        return (
          <>
            <SliderInput id="sip-monthly" label="Monthly Investment" value={sipMonthly} onChange={setSipMonthly} min={500} max={100000} step={500} prefix="₹" />
            <SliderInput id="sip-return" label="Expected Return (p.a.)" value={sipReturn} onChange={setSipReturn} min={1} max={30} step={0.5} suffix="%" />
            <SliderInput id="sip-years" label="Time Period" value={sipYears} onChange={setSipYears} min={1} max={40} suffix=" Years" />
          </>
        );
      case 'stepup':
        return (
          <>
            <SliderInput id="stepup-monthly" label="Monthly Investment" value={stepupMonthly} onChange={setStepupMonthly} min={500} max={100000} step={500} prefix="₹" />
            <SliderInput id="stepup-percent" label="Annual Step-Up" value={stepupPercent} onChange={setStepupPercent} min={0} max={50} suffix="%" />
            <SliderInput id="stepup-return" label="Expected Return (p.a.)" value={stepupReturn} onChange={setStepupReturn} min={1} max={30} step={0.5} suffix="%" />
            <SliderInput id="stepup-years" label="Time Period" value={stepupYears} onChange={setStepupYears} min={1} max={40} suffix=" Years" />
          </>
        );
      case 'lumpsum':
        return (
          <>
            <SliderInput id="lumpsum-amount" label="Investment Amount" value={lumpsumAmount} onChange={setLumpsumAmount} min={10000} max={10000000} step={10000} prefix="₹" />
            <SliderInput id="lumpsum-return" label="Expected Return (p.a.)" value={lumpsumReturn} onChange={setLumpsumReturn} min={1} max={30} step={0.5} suffix="%" />
            <SliderInput id="lumpsum-years" label="Time Period" value={lumpsumYears} onChange={setLumpsumYears} min={1} max={40} suffix=" Years" />
          </>
        );
      case 'swp':
        return (
          <>
            <SliderInput id="swp-initial" label="Initial Investment" value={swpInitial} onChange={setSwpInitial} min={100000} max={10000000} step={50000} prefix="₹" />
            <SliderInput id="swp-withdrawal" label="Monthly Withdrawal" value={swpWithdrawal} onChange={setSwpWithdrawal} min={1000} max={100000} step={1000} prefix="₹" />
            <SliderInput id="swp-return" label="Expected Return (p.a.)" value={swpReturn} onChange={setSwpReturn} min={1} max={20} step={0.5} suffix="%" />
            <SliderInput id="swp-years" label="Time Period" value={swpYears} onChange={setSwpYears} min={1} max={40} suffix=" Years" />
          </>
        );
    }
  };

  const renderResults = () => {
    switch (activeTab) {
      case 'sip':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <ResultCard title="Invested Amount" value={sipResults.invested} color="green" icon={<span className="text-sm sm:text-base">💰</span>} />
            <ResultCard title="Est. Returns" value={sipResults.returns} color="purple" icon={<span className="text-sm sm:text-base">📈</span>} />
            <ResultCard title="Total Value" value={sipResults.total} color="blue" icon={<span className="text-sm sm:text-base">🎯</span>} />
          </div>
        );
      case 'stepup':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <ResultCard title="Invested Amount" value={stepupResults.invested} color="orange" icon={<span className="text-sm sm:text-base">💰</span>} />
            <ResultCard title="Est. Returns" value={stepupResults.returns} color="purple" icon={<span className="text-sm sm:text-base">📈</span>} />
            <ResultCard title="Total Value" value={stepupResults.total} color="blue" icon={<span className="text-sm sm:text-base">🎯</span>} />
          </div>
        );
      case 'lumpsum':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <ResultCard title="Principal" value={lumpsumResults.invested} color="green" icon={<span className="text-sm sm:text-base">💰</span>} />
            <ResultCard title="Est. Returns" value={lumpsumResults.returns} color="purple" icon={<span className="text-sm sm:text-base">📈</span>} />
            <ResultCard title="Total Value" value={lumpsumResults.total} color="blue" icon={<span className="text-sm sm:text-base">🎯</span>} />
          </div>
        );
      case 'swp':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <ResultCard title="Total Withdrawn" value={swpResults.totalWithdrawn} color="green" icon={<span className="text-sm sm:text-base">💸</span>} />
            <ResultCard title="Remaining Balance" value={swpResults.remaining} color="orange" icon={<span className="text-sm sm:text-base">🏦</span>} />
            <ResultCard title="Initial Amount" value={swpResults.initial} color="blue" icon={<span className="text-sm sm:text-base">💰</span>} />
          </div>
        );
    }
  };

  const renderTable = () => {
    const data = activeTab === 'sip' ? sipResults.yearlyData :
                 activeTab === 'stepup' ? stepupResults.yearlyData :
                 activeTab === 'lumpsum' ? lumpsumResults.yearlyData :
                 swpResults.yearlyData;

    return (
      <div className="overflow-x-auto -mx-3 sm:mx-0">
        <table className="min-w-full text-xs sm:text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold text-gray-700">Year</th>
              {activeTab === 'swp' ? (
                <>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-right font-semibold text-gray-700">Withdrawn</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-right font-semibold text-gray-700">Balance</th>
                </>
              ) : (
                <>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-right font-semibold text-gray-700">Invested</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-right font-semibold text-gray-700">Value</th>
                  {activeTab === 'stepup' && (
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-right font-semibold text-gray-700 hidden sm:table-cell">Monthly SIP</th>
                  )}
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {data.map((row: any, index: number) => (
              <tr key={row.year} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-gray-800">{row.year}</td>
                {activeTab === 'swp' ? (
                  <>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-right text-green-700 font-medium">₹{row.withdrawn?.toLocaleString('en-IN')}</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-right text-blue-700 font-medium">₹{row.balance?.toLocaleString('en-IN')}</td>
                  </>
                ) : (
                  <>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-right text-green-700 font-medium">₹{row.invested?.toLocaleString('en-IN')}</td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-right text-blue-700 font-medium">₹{row.value?.toLocaleString('en-IN')}</td>
                    {activeTab === 'stepup' && (
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-right text-purple-700 font-medium hidden sm:table-cell">₹{row.monthlyContribution?.toLocaleString('en-IN')}</td>
                    )}
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="py-4 sm:py-6 lg:py-8">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Calculator Heading */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-3">
            Mutual Fund Calculator Suite
          </h1>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-2">
            Calculate SIP, Step-Up SIP, Lumpsum & SWP returns instantly with our free calculators
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-6 sm:mb-8">
          <TabButton
            active={activeTab === 'sip'}
            onClick={() => setActiveTab('sip')}
            icon={<span>📊</span>}
          >
            SIP
          </TabButton>
          <TabButton
            active={activeTab === 'stepup'}
            onClick={() => setActiveTab('stepup')}
            icon={<span>📈</span>}
          >
            Step-Up SIP
          </TabButton>
          <TabButton
            active={activeTab === 'lumpsum'}
            onClick={() => setActiveTab('lumpsum')}
            icon={<span>💎</span>}
          >
            Lumpsum
          </TabButton>
          <TabButton
            active={activeTab === 'swp'}
            onClick={() => setActiveTab('swp')}
            icon={<span>💸</span>}
          >
            SWP
          </TabButton>
        </div>

        {/* Main Calculator Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
          {/* Left Sidebar Ad - Desktop Only */}
          <div className="hidden xl:block xl:col-span-2">
            <div className="sticky top-20">
              <AdBanner type="vertical" />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-12 xl:col-span-8">
            {/* Calculator Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {/* Input Section */}
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                      ⚙️
                    </span>
                    Input Parameters
                  </h2>
                  {renderInputs()}
                </div>

                {/* Doughnut Chart Section */}
                <div className="flex flex-col items-center justify-center">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                      📊
                    </span>
                    Investment Breakdown
                  </h2>
                  <div className="w-full max-w-[200px] sm:max-w-[250px] aspect-square">
                    <Doughnut
                      data={doughnutData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: true,
                        plugins: {
                          legend: {
                            position: 'bottom',
                            labels: {
                              padding: 15,
                              usePointStyle: true,
                              font: { size: 12 },
                            },
                          },
                        },
                        cutout: '60%',
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-100">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 bg-green-100 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                    🎯
                  </span>
                  Results
                </h2>
                {renderResults()}
              </div>
            </div>

            {/* Mobile Ad */}
            <div className="mb-6 sm:hidden">
              <AdBanner type="mobile" />
            </div>

            {/* Ad Banner - Tablet/Desktop */}
            <div className="hidden sm:block mb-6">
              <AdBanner type="leaderboard" />
            </div>

            {/* Chart Section */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                <span className="w-7 h-7 sm:w-8 sm:h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                  📈
                </span>
                Growth Chart
              </h2>
              <div className="h-[250px] sm:h-[300px] lg:h-[350px]">
                <Line data={chartData.data} options={chartData.options as any} />
              </div>
            </div>

            {/* Yearly Breakdown Table */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                <span className="w-7 h-7 sm:w-8 sm:h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                  📋
                </span>
                Yearly Breakdown
              </h2>
              {renderTable()}
            </div>

            {/* Ad Banner */}
            <div className="mb-6">
              <AdBanner type="horizontal" />
            </div>

            {/* Affiliate CTA Section */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 mb-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 text-center">
                Start Your Investment Journey Today
              </h2>
              <p className="text-gray-600 text-center mb-4 sm:mb-6 text-sm sm:text-base">
                Open a free Demat account with our trusted partners
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
                <a
                  href="https://groww.in"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  aria-label="Start SIP on Groww - Opens in new tab"
                  className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl"
                >
                  <span>Groww</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="https://zerodha.com"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  aria-label="Invest with Zerodha - Opens in new tab"
                  className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl"
                >
                  <span>Zerodha</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="https://upstox.com"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  aria-label="Open account on Upstox - Opens in new tab"
                  className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl"
                >
                  <span>Upstox</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="https://kuvera.in"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  aria-label="Invest with Kuvera - Opens in new tab"
                  className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl"
                >
                  <span>Kuvera</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Sidebar Ad - Desktop Only */}
          <div className="hidden xl:block xl:col-span-2">
            <div className="sticky top-20">
              <AdBanner type="vertical" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
