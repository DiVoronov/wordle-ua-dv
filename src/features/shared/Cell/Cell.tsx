import React from 'react';

interface ICellColor {
  bgColor: string
  textColor?: string
}
interface ICellProps {
  letter?: string
  color: ICellColor
};

export const Cell: React.FC<ICellProps> = ( { letter, color }: ICellProps ) => {
  return (
    <div className='cell' style={{background: color.bgColor, color: color.textColor}}>
      {
        letter
      }
    </div>
  );
};
