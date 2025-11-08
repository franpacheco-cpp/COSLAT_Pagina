'use client';

import type { CSSProperties } from 'react';

type Cluster = {
  id: string;
  unit: string;
  cells: Array<[number, number]>;
  style: CSSProperties;
};

function rowsToCells(rows: string[]): Array<[number, number]> {
  const cells: Array<[number, number]> = [];
  rows.forEach((row, y) => {
    row.split('').forEach((char, x) => {
      if (char === '1') {
        cells.push([x, y]);
      }
    });
  });
  return cells;
}

const clusters: Cluster[] = [
  {
    id: 'mexico',
    unit: 'clamp(6px, 1.3vw, 14px)',
    cells: [
      ...rowsToCells([
        '11111110',
        '11111111',
        '01111111',
        '00111111',
        '00111111',
        '00011111',
        '00001111',
        '00000111'
      ]),
      [8, 1],
      [8, 2],
      [7, 3],
      [6, 5],
      [5, 6],
      [4, 7]
    ],
    style: { top: 0, left: 0 }
  },
  {
    id: 'brasil',
    unit: 'clamp(6px, 1.5vw, 16px)',
    cells: [
      ...rowsToCells([
        '001111100',
        '011111110',
        '111111111',
        '111111111',
        '111111111',
        '011111111',
        '001111110',
        '001111110',
        '000111110',
        '000011110',
        '000011100'
      ]),
      [1, 0],
      [7, 0],
      [8, 1],
      [8, 2],
      [7, 6],
      [6, 8],
      [5, 9],
      [4, 10],
      [6, 10],
      [7, 10]
    ],
    style: { top: '18%', right: '4%' }
  },
  {
    id: 'cone-sur',
    unit: 'clamp(5px, 1vw, 12px)',
    cells: [
      ...rowsToCells([
        '00011',
        '00111',
        '00111',
        '01111',
        '01111',
        '01110',
        '00110',
        '00110',
        '00110',
        '00010',
        '00010'
      ]),
      [0, 3],
      [0, 4],
      [1, 5],
      [2, 7],
      [3, 8],
      [1, 9],
      [2, 10]
    ],
    style: { bottom: 0, left: '16%' }
  }
];

interface PixelBrandProps {
  intense?: boolean;
}

export function PixelBrand({ intense = false }: PixelBrandProps) {
  return (
    <div className="pointer-events-none absolute inset-0">
      {clusters.map(({ id, unit, cells, style }) => {
        const maxX = Math.max(...cells.map(([x]) => x));
        const maxY = Math.max(...cells.map(([, y]) => y));

        return (
          <div
            key={id}
            className="absolute transition-opacity duration-500"
            style={{
              ...style,
              width: `calc(${maxX + 1} * ${unit})`,
              height: `calc(${maxY + 1} * ${unit})`,
              opacity: intense ? 0.55 : 0.3
            }}
          >
            <div className="relative h-full w-full">
              {cells.map(([x, y], index) => (
                <span
                  key={`${id}-${index}`}
                  className="absolute block bg-black"
                  style={{
                    width: unit,
                    height: unit,
                    left: `calc(${x} * ${unit})`,
                    top: `calc(${y} * ${unit})`
                  }}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
