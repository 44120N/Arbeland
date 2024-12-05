import { Button as MuiButton } from '@mui/material';

const Button = ({ children, onClick, styleOverrides }) => {
    return (
        <MuiButton
            onClick={onClick}
            variant="contained"
            disableElevation
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '8px 16px',
                fontSize: '1rem',
                fontWeight: 600,
                backgroundColor: '#93c5fd',
                color: '#ffffff',
                textTransform: 'none',
                border: '2px solid black',
                borderRadius: '8px',
                boxShadow: '5px 5px 0px rgba(0,0,0,1)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                    backgroundColor: '#7bb4f5',
                    transform: 'translate(5px, 5px)',
                    boxShadow: 'none',
                },
                '&:active': {
                    transform: 'translate(2px, 2px)',
                },
                ...styleOverrides,
            }}
        >
            {children}
        </MuiButton>
    );
};

export default Button;
