import React from 'react';

const StatusBadge = ({ status }) => {
  let color;

  switch (status) {
    case 'pending':
      color = '#dc3545';
      break;
    case 'in_progress':
      color = '#ffc107';
      break;
    case 'done':
      color = '#28a745';
      break;
    default:
      color = '#6c757d';
  }

  return (
    <span className="status-badge" style={{ backgroundColor: color }}>
      {status}
    </span>
  );
};

export default StatusBadge;
