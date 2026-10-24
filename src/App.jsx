
import EmployeeCard from "./Commponets/d6";
import "./App.css";

function App() {
  const employees = [
    {
      id: 1,
      name: "Arun Kumar",
      role: "Frontend Developer",
      email: "arun@gmail.com",
      department: "IT",
    },
    {
      id: 2,
      name: "Meera Nair",
      role: "UI Designer",
      email: "meera@gmail.com",
      department: "Design",
    },
    {
      id: 3,
      name: "Rahul Das",
      role: "Backend Developer",
      email: "rahul@gmail.com",
      department: "IT",
    },
  ];

  return (
    
    <div className="app">
      <h1>Employee Directory</h1>
      <label htmlFor="search">Search Employees:</label>
      <input type="text" id="search" placeholder="Enter name, role, or department" />

      <div className="employee-list">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            name={employee.name}
            role={employee.role}
            email={employee.email}
            department={employee.department}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
