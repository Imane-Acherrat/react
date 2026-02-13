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
        <table>
            <thead>
                <tr>
                    <td> Company </td><td> Position </td><td> Location </td><td> Status </td><td> Salary </td><td> Actions </td>
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