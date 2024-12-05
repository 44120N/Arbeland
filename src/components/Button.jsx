import { Button as MuiButton } from '@mui/material';

const Button = ({ children, onClick, sx, color, bgcolor, bdcolor }) => {
    return (
        <MuiButton
            onClick={onClick}
            variant="contained"
            disableElevation
            sx={{
                minWidth: "0",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2% 3%',
                fontSize: '1rem',
                fontWeight: 600,
                backgroundColor: `${bgcolor}`,
                color: `${color}`,
                textTransform: 'none',
                border: `2px solid ${bdcolor}`,
                borderRadius: '8px',
                boxShadow: `5px 5px 0px ${bdcolor}`,
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
                ...sx,
            }}
        >
            {children}
        </MuiButton>
    );
};

export default Button;
