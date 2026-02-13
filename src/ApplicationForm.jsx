import { useState } from "react"

export default function ApplicationForm({ setCandidatures }) {
    const [formData, setFormData] = useState({
        id: Date.now(),
        company: "",
        position: "",
        salaryExpected: "",
        location: "",
        status: "Applied"
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setCandidatures(prev => [...prev, formData])

        setFormData({
            id: Date.now(),
            company: "",
            position: "",
            salaryExpected: "",
            location: "",
            status: "Applied"
        })
    }

    const handleChange = (e) => {
        setFormData(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }


    return <form onSubmit={handleSubmit}>
        <input type="text" value={formData.company} name="company" placeholder="Company" onChange={handleChange}></input>
        <input type="text" value={formData.position} name="position" placeholder="Position" onChange={handleChange}></input>
        <input type="text" value={formData.location} name="location" placeholder="Location" onChange={handleChange}></input>
        <input type="number" value={formData.salaryExpected} name="salaryExpected" placeholder="Salaire" onChange={handleChange}></input>
        <button>Submit</button>
    </form>
}