import axios from "axios";
import { useEffect, useState } from "react";
import ApplicationTable from "./ApplicationTable";
import ApplicationForm from "./ApplicationForm";
import { useDispatch, useSelector } from "react-redux";
import { setCandidatures } from "./redux/actions";

export default function Main() {
    const candidatures = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:3001/candidatures")
                dispatch(setCandidatures(res.data))
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [])

    return <div>
        <ApplicationForm></ApplicationForm>
        <ApplicationTable></ApplicationTable>
    </div>
}