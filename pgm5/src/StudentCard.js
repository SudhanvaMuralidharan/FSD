// Child functional component -
// receives data via PROPS
function StudentCard(props) {
  return (
     <tr>
       <td>{props.usn}</td>
       <td>{props.name}</td>
       <td>{props.branch}</td>
       <td>{props.cgpa}</td>
     </tr>
  );
}
export default StudentCard;
