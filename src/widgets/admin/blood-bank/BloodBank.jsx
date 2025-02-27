import styles from "./BloodBank.module.css";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import Select from "react-select";


const data = [
    { month: "Січ", whole: 2000, platelets: 1000, plasma: 800 },
    { month: "Лют", whole: 1500, platelets: 900, plasma: 700 },
    { month: "Бер", whole: 1800, platelets: 1100, plasma: 750 },
    { month: "Кв", whole: 2500, platelets: 1300, plasma: 900 },
    { month: "Тр", whole: 1000, platelets: 700, plasma: 500 },
    { month: "Чр", whole: 2200, platelets: 1200, plasma: 850 },
    { month: "Лп", whole: 1700, platelets: 950, plasma: 780 },
    { month: "Срп", whole: 2000, platelets: 1000, plasma: 800 },
    { month: "Вер", whole: 2300, platelets: 1250, plasma: 870 },
    { month: "Жов", whole: 900, platelets: 600, plasma: 450 },
    { month: "Лис", whole: 1900, platelets: 1050, plasma: 820 },
    { month: "Гр", whole: 2100, platelets: 1150, plasma: 860 }
];
const customStyles = {
    control: (base) => ({
        ...base,
        border: '2px solid #C51A2D',
        boxShadow: 'none',
        '&:hover': {
            borderColor: '#86040E',
        },
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused
            ? '#C51A2D'
            : state.isSelected
                ? '#86040E'
                : provided.backgroundColor,
        color: state.isFocused || state.isSelected ? 'white' : 'black',
        '&:active': {
            backgroundColor: '#C51A2D',
            color: 'white',
        },
    }),
};

const options = [
    { value: "week", label: "Тиждень" },
    { value: "month", label: "Місяць" },
    { value: "6months", label: "6 місяців" },
    { value: "year", label: "Рік" }
];

const bloodData = [
    { type: "Цільна кров", values: { "O+": "2л", "O-": "1л", "A+": "3л", "A-": "1,5л", "B+": "1л", "B-": "500мл", "AB+": "500мл", "AB-": "-" } },
    { type: "Тромбоцити", values: { "O+": "2л", "O-": "1л", "A+": "3л", "A-": "1,5л", "B+": "1л", "B-": "500мл", "AB+": "500мл", "AB-": "-" } },
    { type: "Плазма", values: { "O+": "2л", "O-": "1л", "A+": "3л", "A-": "1,5л", "B+": "1л", "B-": "500мл", "AB+": "500мл", "AB-": "-" } }
];

const BloodBank = () => {
    const [selectedOption, setSelectedOption] = useState(options[1]);
    const [showModal, setShowModal] = useState(false);
    const [neededBlood, setNeededBlood] = useState([]);

    const handleAddBlood = (type) => {
        setNeededBlood([...neededBlood, type]);
        setShowModal(false);
    };
    return (
        <div className={styles.container}>
            {bloodData.map((category, index) => (
                <div key={index} className={styles.card}>
                    <h3>{category.type}</h3>
                    <table>
                        <tbody>
                        {Object.entries(category.values).map(([bloodType, amount]) => (
                            <tr key={bloodType}>
                                <td>{bloodType}</td>
                                <td>{amount}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            ))}
    <div className={styles.container1}>
        <div className={styles.chartSection}>
            <div className={styles.filters}>
                <Select
                    options={options}
                    value={selectedOption}
                    onChange={setSelectedOption}
                    styles={customStyles}
                />
            </div>
            <div className={styles.chartContainer}>
                <ResponsiveContainer>
                    <BarChart data={data}>
                        <XAxis dataKey="month"/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                        <Bar dataKey="whole" stackId="a" fill="#440204" name="Цільна кров"/>
                        <Bar dataKey="platelets" stackId="a" fill="#86040E" name="Тромбоцити"/>
                        <Bar dataKey="plasma" stackId="a" fill="#C51A2D" name="Плазма"/>
                    </BarChart>
                </ResponsiveContainer>
            </div>

        </div>
        <div className={styles.requestSection}>
            <div className={styles.requestCard}>
                <h4>Потрібно таку групу:</h4>
                {neededBlood.map((blood, index) => (
                    <p key={index}>{blood}</p>
                ))}
                <button className={styles.addButton} onClick={() => setShowModal(true)}>+</button>
                <button className={styles.Button} >Запит </button>
            </div>
            {showModal && (
                <div className={styles.modal}>
                <h4>Оберіть тип крові</h4>
                    {['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'].map(type => (
                        <button key={type} onClick={() => handleAddBlood(type)}>{type}</button>
                    ))}
                    <button onClick={() => setShowModal(false)}>Закрити</button>
                </div>
            )}
        </div>
    </div></div>
    );
};

export default BloodBank;
