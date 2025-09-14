import React from 'react';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const CustomBarChart: React.FC<{ data: any }> = React.memo(({ data }) => {
  return (
    <BarChart width={250} height={200} data={data} className='-ml-[50px]' barSize={5} barCategoryGap={20}>
      <XAxis
        dataKey="name"
        axisLine={false}
        tickLine={false}
        interval={0}
        style={{ fontSize: '8px', transform: 'translateX(4px)' }}
      />
      <YAxis
        axisLine={false}
        tickLine={false}
        domain={[0, 6]}
        ticks={[0, 3, 6]}
        tickFormatter={(value) => {
          if (value === 0) return 'Low';
          if (value === 3) return 'Mid';
          if (value === 6) return 'High';
          return '';
        }}
        style={{ fontSize: '10px' }}
      />
      <Bar dataKey="max" fill="#9d9d9d" isAnimationActive={false} radius={[10, 10, 10, 10]} className="value-bar" />
      <Bar dataKey="value" fill="#9370DB" radius={[10, 10, 10, 10]} />
    </BarChart>
  );
});

export { CustomBarChart };