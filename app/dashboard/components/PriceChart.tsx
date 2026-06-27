"use client";

import React, { useState } from "react";

interface PriceData {
  crop: string;
  cropHindi: string;
  lastWeek: number;
  thisWeek: number;
}

const mockPrices: PriceData[] = [
  { crop: "Wheat", cropHindi: "गेहूं", lastWeek: 2100, thisWeek: 2150 },
  { crop: "Rice", cropHindi: "चावल", lastWeek: 2250, thisWeek: 2300 },
  { crop: "Maize", cropHindi: "मक्का", lastWeek: 1800, thisWeek: 1850 },
  { crop: "Soybean", cropHindi: "सोयाबीन", lastWeek: 4750, thisWeek: 4600 },
  { crop: "Mustard", cropHindi: "सरसों", lastWeek: 5200, thisWeek: 5450 },
];

interface TooltipState {
  x: number;
  y: number;
  crop: string;
  cropHindi: string;
  week: string;
  value: number;
  color: string;
}

export default function PriceChart() {
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const [hoveredBarId, setHoveredBarId] = useState<string | null>(null);

  // SVG dimensions
  const svgWidth = 600;
  const svgHeight = 350;
  const chartPadding = { top: 30, right: 20, bottom: 50, left: 60 };

  const chartWidth = svgWidth - chartPadding.left - chartPadding.right;
  const chartHeight = svgHeight - chartPadding.top - chartPadding.bottom;
  const maxValue = 6000; // Y-axis max value (MSP range goes up to 5450)

  // Helper to map values to SVG Y coordinate
  const getY = (val: number) => {
    return chartPadding.top + chartHeight - (val / maxValue) * chartHeight;
  };

  // Helper to get height from value
  const getHeight = (val: number) => {
    return (val / maxValue) * chartHeight;
  };

  // Grid line values
  const gridLines = [0, 1000, 2000, 3000, 4000, 5000, 6000];

  const groupWidth = chartWidth / mockPrices.length;
  const barWidth = 22;
  const barGap = 4;

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md h-full flex flex-col justify-between select-none">
      <div>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-800">
              Mandi Prices <span className="text-slate-400 font-normal text-sm">(मंडी भाव)</span>
            </h3>
            <p className="text-xs text-slate-400 font-semibold mt-0.5">
              Weekly price comparison in ₹/quintal
            </p>
          </div>
          {/* Display current range */}
          <span className="self-start sm:self-auto px-2.5 py-1 rounded-lg bg-green-50 border border-green-100 text-xs font-bold text-green-700">
            Live MSP Index
          </span>
        </div>

        {/* Chart View Area */}
        <div className="relative w-full overflow-x-auto">
          {/* Outer container to match aspect ratio */}
          <div className="min-w-[550px] w-full relative">
            <svg
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              className="w-full h-auto overflow-visible"
            >
              {/* Draw Horizontal Grid Lines and Y-Axis Labels */}
              {gridLines.map((val) => {
                const y = getY(val);
                return (
                  <g key={val} className="opacity-75">
                    {/* Grid line */}
                    <line
                      x1={chartPadding.left}
                      y1={y}
                      x2={svgWidth - chartPadding.right}
                      y2={y}
                      stroke="#f1f5f9"
                      strokeWidth="1.5"
                    />
                    {/* Y label */}
                    <text
                      x={chartPadding.left - 12}
                      y={y + 4}
                      textAnchor="end"
                      className="fill-slate-400 text-[11px] font-bold"
                    >
                      ₹{val.toLocaleString("en-IN")}
                    </text>
                  </g>
                );
              })}

              {/* Draw X-Axis Line */}
              <line
                x1={chartPadding.left}
                y1={getY(0)}
                x2={svgWidth - chartPadding.right}
                y2={getY(0)}
                stroke="#e2e8f0"
                strokeWidth="1.5"
              />

              {/* Grouped Bars Mapping */}
              {mockPrices.map((item, index) => {
                const groupStartX = chartPadding.left + index * groupWidth;
                // Center the bar group inside the crop section
                const barsTotalWidth = barWidth * 2 + barGap;
                const offset = (groupWidth - barsTotalWidth) / 2;

                const lastWeekBarX = groupStartX + offset;
                const thisWeekBarX = lastWeekBarX + barWidth + barGap;

                const lastWeekBarY = getY(item.lastWeek);
                const lastWeekHeight = getHeight(item.lastWeek);

                const thisWeekBarY = getY(item.thisWeek);
                const thisWeekHeight = getHeight(item.thisWeek);

                // Unique IDs for hover effects
                const lastWeekId = `lw-${index}`;
                const thisWeekId = `tw-${index}`;

                return (
                  <g key={item.crop}>
                    {/* Crop Label X-Axis */}
                    <text
                      x={groupStartX + groupWidth / 2}
                      y={svgHeight - chartPadding.bottom + 20}
                      textAnchor="middle"
                      className="fill-slate-700 text-xs font-bold"
                    >
                      {item.crop}
                    </text>
                    <text
                      x={groupStartX + groupWidth / 2}
                      y={svgHeight - chartPadding.bottom + 36}
                      textAnchor="middle"
                      className="fill-slate-400 text-[10px] font-bold"
                    >
                      ({item.cropHindi})
                    </text>

                    {/* Last Week Bar (Light Green) */}
                    <rect
                      x={lastWeekBarX}
                      y={lastWeekBarY}
                      width={barWidth}
                      height={lastWeekHeight}
                      rx="4"
                      fill="#4ade80"
                      className="transition-all duration-300 cursor-pointer origin-bottom hover:brightness-95"
                      style={{
                        opacity:
                          hoveredBarId === null || hoveredBarId === lastWeekId
                            ? 1
                            : 0.4,
                      }}
                      onMouseEnter={(e) => {
                        setHoveredBarId(lastWeekId);
                        // Get coordinates relative to SVG
                        const rect = e.currentTarget.getBoundingClientRect();
                        const svg = e.currentTarget.ownerSVGElement;
                        if (svg) {
                          const svgRect = svg.getBoundingClientRect();
                          // Calculate tooltip position
                          setTooltip({
                            x: rect.left - svgRect.left + barWidth / 2,
                            y: rect.top - svgRect.top - 8,
                            crop: item.crop,
                            cropHindi: item.cropHindi,
                            week: "Last Week",
                            value: item.lastWeek,
                            color: "#4ade80",
                          });
                        }
                      }}
                      onMouseLeave={() => {
                        setHoveredBarId(null);
                        setTooltip(null);
                      }}
                    >
                      <title>{`${item.crop} (Last Week): ₹${item.lastWeek}/qtl`}</title>
                    </rect>

                    {/* This Week Bar (Dark Green) */}
                    <rect
                      x={thisWeekBarX}
                      y={thisWeekBarY}
                      width={barWidth}
                      height={thisWeekHeight}
                      rx="4"
                      fill="#16a34a"
                      className="transition-all duration-300 cursor-pointer origin-bottom hover:brightness-95"
                      style={{
                        opacity:
                          hoveredBarId === null || hoveredBarId === thisWeekId
                            ? 1
                            : 0.4,
                      }}
                      onMouseEnter={(e) => {
                        setHoveredBarId(thisWeekId);
                        const rect = e.currentTarget.getBoundingClientRect();
                        const svg = e.currentTarget.ownerSVGElement;
                        if (svg) {
                          const svgRect = svg.getBoundingClientRect();
                          setTooltip({
                            x: rect.left - svgRect.left + barWidth / 2,
                            y: rect.top - svgRect.top - 8,
                            crop: item.crop,
                            cropHindi: item.cropHindi,
                            week: "This Week",
                            value: item.thisWeek,
                            color: "#16a34a",
                          });
                        }
                      }}
                      onMouseLeave={() => {
                        setHoveredBarId(null);
                        setTooltip(null);
                      }}
                    >
                      <title>{`${item.crop} (This Week): ₹${item.thisWeek}/qtl`}</title>
                    </rect>
                  </g>
                );
              })}
            </svg>

            {/* Interactive Tooltip Overlay */}
            {tooltip && (
              <div
                className="absolute z-20 pointer-events-none bg-slate-900 text-white text-xs rounded-xl px-3 py-2 shadow-xl border border-slate-800 -translate-x-1/2 -translate-y-full flex flex-col gap-0.5 transition-all duration-150"
                style={{
                  left: `${(tooltip.x / svgWidth) * 100}%`,
                  top: `${(tooltip.y / svgHeight) * 100}%`,
                }}
              >
                <div className="font-extrabold flex items-center gap-1">
                  <span>{tooltip.crop}</span>
                  <span className="text-[10px] text-slate-400 font-semibold">
                    ({tooltip.cropHindi})
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-300 mt-0.5">
                  <div
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: tooltip.color }}
                  />
                  <span>{tooltip.week}</span>
                </div>
                <div className="font-black text-green-400 text-sm mt-1">
                  ₹{tooltip.value.toLocaleString("en-IN")}
                  <span className="text-[10px] text-slate-400 font-semibold">
                    /qtl
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Legend Block */}
      <div className="flex items-center justify-center gap-6 border-t border-slate-100 pt-4 mt-2">
        <div className="flex items-center gap-2">
          <div className="h-3.5 w-3.5 rounded bg-[#4ade80]" />
          <span className="text-xs font-bold text-slate-500">
            Last Week (पिछला सप्ताह)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3.5 w-3.5 rounded bg-[#16a34a]" />
          <span className="text-xs font-bold text-slate-500">
            This Week (यह सप्ताह)
          </span>
        </div>
      </div>
    </div>
  );
}
