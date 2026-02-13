import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ApplicationDetails = () => {
    // Récupérer l'id depuis l'URL
    const { id } = useParams();

    // Accéder au state global Redux
    const candidature = useSelector((state) => state.find(
        (c) => c.id == id
    ))
    return (
        <div style={{ padding: "20px" }}>
            <h1>Détails de la candidature</h1>

            <p>
                <strong>ID :</strong> {candidature.id}
            </p>

            <p>
                <strong>Position :</strong> {candidature.position}
            </p>

            <p>
                <strong>Location :</strong> {candidature.location}
            </p>

            <p>
                <strong>Company :</strong> {candidature.company}
            </p>

            <p>
                <strong>Salary :</strong> {candidature.salaryExpected}
            </p>

            <p>
                <strong>Status :</strong> {candidature.status}
            </p>

        </div>
    );
};

export default ApplicationDetails;
