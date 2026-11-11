import StudentCard from './StudentCard';
import Header from './Header';

function App() {
  const students = [
    { usn: '1RN23CS001', name: 'Aditi Sharma', branch: 'CSE', cgpa: 9.1 },
    { usn: '1RN23CS014', name: 'Bharath K', branch: 'CSE', cgpa: 8.7 },
  ];

  return (
    <div>
      <Header title="Student Directory - React Components & Props" />
      <table border="1">
        <thead>
          <tr>
            <th>USN</th>
            <th>Name</th>
            <th>Branch</th>
            <th>CGPA</th>
          </tr>
        </thead>
        <tbody>
          {students.map(s => (
            <StudentCard
              key={s.usn}
              usn={s.usn}
              name={s.name}
              branch={s.branch}
              cgpa={s.cgpa}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
