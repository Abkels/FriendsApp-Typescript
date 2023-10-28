import React from 'react';
import Card from './Card';

interface CardlistProps {
  robots: Array<{
    id: number;
    name: string;
    email: string;
  }>;
}

const Cardlist: React.FC<CardlistProps> = ({ robots }) => {
  return (
    <div>
      {robots.map((robot, i) => (
        <Card key={i} id={robot.id} name={robot.name} email={robot.email} />
      ))}
    </div>
  );
};

export default Cardlist;
