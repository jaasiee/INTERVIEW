
import React from 'react';


 function EmployeeCard({ name, role, email, department }) {

  return (
    <div className="employee-card">
      <div className="avatar">
        {name.charAt(0)}
      </div>

      <h2>{name}</h2>
      <p className="role">{role}</p>
      <p>{email}</p>
      <p>{department} Department</p>
    </div>
  );
}

export default EmployeeCard;
