import axios from "axios";
import { useEffect, useState } from "react";
import ApplicationTable from "./ApplicationTable";
import ApplicationForm from "./ApplicationForm";

export default function Main() {
    const [candidatures, setCandidatures] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:3001/candidatures")
                setCandidatures(res.data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [])

    return <div>
        <ApplicationForm setCandidatures={setCandidatures}></ApplicationForm>
        <ApplicationTable candidatures={candidatures} setCandidatures={setCandidatures}></ApplicationTable>
    </div>
}