export const GENDER_TYPE = {
    MALE: "LAKI",
    FEMALE: "PEREMPUAN",
};

export const createStaticDataGender = () => {
    const retval = [
        {
            value: GENDER_TYPE.MALE,
            label: "Laki - Laki",
        },
        {
            value: GENDER_TYPE.FEMALE,
            label: "Perempuan",
        },
    ];

    return retval;
};