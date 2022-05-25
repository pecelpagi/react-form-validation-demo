import { useState } from "react";
import InputText from "./components/InputText";
import Select from "./components/Select";
import { createStaticDataGender } from "./utils";

export default () => {
    const [formData, setFormData] = useState({ fullname: "", email: "", gender: "" });

    const handleSubmitData = (e) => {
        e.preventDefault();
        alert(JSON.stringify(formData));
    }

    const handleChangeData = (key, value) => {
        const newFormData = {
            ...formData,
            [key]: value,
        };

        setFormData(newFormData);
    }

    return (
        <div className="panel">
            <div className="panel-heading">
                <h5>Formulir Pendaftaran</h5>
            </div>
            <form onSubmit={handleSubmitData} className="panel-body">
                <div>
                    <InputText
                        label="Nama Lengkap"
                        value={formData.fullname}
                        onChange={(val) => { handleChangeData("fullname", val) }}
                    />
                </div>
                <div>
                    <InputText
                        label="Email"
                        value={formData.email}
                        onChange={(val) => { handleChangeData("email", val) }}
                    />
                </div>
                <div>
                    <Select
                        label="Jenis Kelamin"
                        value={formData.gender}
                        options={createStaticDataGender()}
                        onChange={(val) => { handleChangeData("gender", val) }}
                    />
                </div>
                <button className="submit-button" type="submit">Kirim</button>
            </form>
        </div>
    );
}