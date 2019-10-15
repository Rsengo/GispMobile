const metric = {
    initialState: {
        longitude: 0,
        latitude: 0
    },
    fields: [
        {
            label: 'Долгота',
            valueProp: 'longitude',
            keyboardType: 'decimal-pad',
        },
        {
            label: 'Широта',
            valueProp: 'latitude',
            keyboardType: 'decimal-pad',
        }
    ]
};

const degree = {
    initialState: {
        grad: 0,
        min: 0,
        sec: 0
    },
    fields: [
        {
            label: 'Градусы',
            valueProp: 'grad',
            keyboardType: 'decimal-pad',
        },
        {
            label: 'Минуты',
            valueProp: 'min',
            keyboardType: 'decimal-pad',
        },
        {
            label: 'Секунды',
            valueProp: 'sec',
            keyboardType: 'decimal-pad',
        }
    ]
}

export { metric, degree };