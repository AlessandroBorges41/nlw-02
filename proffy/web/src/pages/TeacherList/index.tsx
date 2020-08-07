import React, { useState, FormEvent } from 'react'

import './styles.css'
import PageHeader from '../../components/PageHeader'
import TeacherItem, {Teacher} from '../../components/TeacherItem'
import Input from '../../components/InputField'
import Select from '../../components/Select'
import api from '../../services/api'

const subjects =
[
    {value: 'Física', label: 'Física'},
    {value: 'Química', label: 'Química'},
    {value: 'Matemática', label: 'Matemática'},
    {value: 'Biologia', label: 'Biologia'},
    {value: 'Português', label: 'Português'},
    {value: 'Redação', label: 'Redação'},
    {value: 'Literature', label: 'Literature'},
    {value: 'Artes', label: 'Artes'},
    {value: 'História', label: 'História'},
    {value: 'Geografia', label: 'Geografia'},
    {value: 'Filosofia', label: 'Filosofia'},
    {value: 'Sociologia', label: 'Sociologia'},
]
const week_days =
[
    {value: '0', label: 'Domingo'},
    {value: '1', label: 'Segunda-feira'},
    {value: '2', label: 'Terça-feira'},
    {value: '3', label: 'Quarta-feira'},
    {value: '4', label: 'Quinta-feira'},
    {value: '5', label: 'Sexta-feira'},
    {value: '6', label: 'Sábado'}
]

function TeacherList()
{
    const [teachers, setTeachers] = useState([])

    const [subject, setSubject] = useState('')
    const [week_day, setWeekDay] = useState('')
    const [time, setTime] = useState('')

    async function searchTeachers(e: FormEvent)
    {
        e.preventDefault()
        const res = await api.get('classes', {params: {subject, week_day, time}})
        setTeachers(res.data)
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form onSubmit={searchTeachers} id="search-teachers">
                    <Select
                        name="subject"
                        label="Matéria"
                        options={subjects}
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                    />
                    <Select
                        name="week_day"
                        label="Dia da Semana"
                        options={week_days}
                        value={week_day}
                        onChange={e => setWeekDay(e.target.value)}
                    />
                    <Input
                        name="time"
                        label="Hora"
                        type="time"
                        value={time}
                        onChange={e => setTime(e.target.value)}
                    />
                    <button type="submit">Buscar</button>
                </form>
            </PageHeader>
            <main>
                {teachers.map((teacher: Teacher) => (
                    <TeacherItem key={teacher.id} teacher={teacher} />
                ))}
            </main>
        </div>
    )
}

export default TeacherList