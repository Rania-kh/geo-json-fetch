// TextInput.tsx

import { TextField, TextFieldProps } from '@mui/material';
import { FieldAttributes, useField } from 'formik';
import React from 'react';

type TextInputProps = {
    label: string;
} & FieldAttributes<{}> & TextFieldProps;

const TextInput: React.FC<TextInputProps> = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div>
            <TextField
                {...field}
                {...props}
                label={label}
                error={meta.touched && !!meta.error}
                helperText={meta.touched && meta.error}
                fullWidth
            />
        </div>
    );
};

export default TextInput;
