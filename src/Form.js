import { Controller, useForm } from "react-hook-form";
import InputText from "./components/InputText";
import Select from "./components/Select";
import { createStaticDataGender } from "./utils";

export default () => {
    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (formData) => { alert(JSON.stringify(formData)); }

    return (
        <div className="panel">
            <div className="panel-heading">
                <h5>Formulir Pendaftaran</h5>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="panel-body">
                <div>
                    <Controller
                        name="fullname"
                        control={control}
                        defaultValue=""
                        rules={{ required: true }}
                        render={({ field }) => <InputText label="Nama Lengkap" {...field} />}
                    />
                    {(errors.fullname && errors.fullname.type === "required") && <span className="text-red">Mohon untuk mengisi nama lengkap</span>}
                </div>
                <div>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{ required: true }}
                        render={({ field }) => <InputText label="Email" {...field} />}
                    />
                    {(errors.email && errors.email.type === "required") && <span className="text-red">Mohon untuk mengisi email</span>}
                </div>
                <div>
                    <Controller
                        name="gender"
                        control={control}
                        defaultValue=""
                        rules={{ required: true }}
                        render={({ field }) => <Select label="Jenis Kelamin" options={createStaticDataGender()} {...field} />}
                    />
                    {(errors.gender && errors.gender.type === "required") && <span className="text-red">Mohon untuk memilih jenis kelamin</span>}
                </div>
                <button className="submit-button" type="submit">Kirim</button>
            </form>
        </div>
    );
}