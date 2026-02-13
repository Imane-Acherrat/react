import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ApplicationTable({ setCandidatures, candidatures }) {

    const handleDelete = (id) => {
        setCandidatures(prev => prev.filter(el => el.id !== id))
    }
    const handleStatusChange = (id, newStatus) => {
        setCandidatures(prev => prev.map(el => el.id === id ? {
            ...el, status: newStatus
        } : el))
    }
    return <div>
        <table border={1}>
            <thead>
                <tr>
                    <th> Company </th><th> Position </th><th> Location </th><th> Status </th><th> Salary </th><th> Actions </th>
                </tr>
            </thead>
            <tbody>
                {
                    candidatures.map(el => <tr key={el.id}>
                        <td>{el.company}</td>
                        <td> {el.position}</td>
                        <td>{el.location}</td>
                        <td>{el.status}</td>
                        <td>{el.salaryExpected}</td>
                        <td>
                            <button onClick={() => handleDelete(el.id)}>Supprimer</button>
                            {el.status == "Applied" && <>
                                <button onClick={() => handleStatusChange(el.id, "Accepted")}>Accepter</button>
                                <button onClick={() => handleStatusChange(el.id, "Rejected")}>Refuser</button></>}
                            <Link to={`/details/${el.id}`}>Voir Details</Link>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
}