import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Button } from "@material-ui/core";


export const ErrorLoading = ({ onClickDownload }) => {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error">This is an error alert — check it out!</Alert>
            <Button variant="outlined" size="medium" style={{
                marginLeft: '20px'
            }} onClick={onClickDownload}>Reload</Button>
        </Stack>

    )
}