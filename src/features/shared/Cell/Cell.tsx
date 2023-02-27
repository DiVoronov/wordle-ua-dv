import React from 'react';

interface ICellProps {
  letter?: string
  color: string
};

export const Cell: React.FC<ICellProps> = ( { letter, color }: ICellProps ) => {
  return (
    <div className='cell' style={{background: color}}>
      {
        letter
      }
    </div>
  );
};
