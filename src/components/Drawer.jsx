import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const Drawer = ({ list, title, active, setActive, color, bgcolor, bdcolor }) => {
    const [isVisible, setIsVisible] = useState(false);

    const closeDrawer = () => {
        setIsVisible(false);
        setTimeout(() => {
        setActive(false);
        }, 300);
    };

    useEffect(() => {
        if (active) {
        setIsVisible(true);
        }
    }, [active]);

    if (!active) return null;

    return ReactDOM.createPortal(
        <>
        <Box
            aria-modal="true"
            onClick={closeDrawer}
            sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 1300,
            opacity: isVisible ? 1 : 0,
            visibility: isVisible ? 'visible' : 'hidden',
            transition: 'opacity 0.3s ease, visibility 0.3s ease',
            }}
        />
        
        <Box
            onClick={(e) => e.stopPropagation()}
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                height: '100vh',
                width: '250px',
                backgroundColor: `${bgcolor}`,
                border: `2px solid ${bdcolor}`,
                zIndex: 1400,
                transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
                transition: 'transform 0.3s ease',
                padding: '16px',
            }}
        >
            <Typography
                variant="h6"
                sx={{
                    fontWeight: 600,
                    marginBottom: '16px',
                    color: `${color}`,
                    textAlign: 'center',
                }}
            >
                {title}
            </Typography>

            <List>
                {list.map((item, index) => (
                    <ListItem
                        key={index}
                        sx={{
                            padding: '8px',
                                borderBottom: `1px solid ${bdcolor}`,
                            '&:last-child': {
                                borderBottom: 'none',
                            },
                        }}
                        button
                        onClick={() => {
                            item.onClick ? item.onClick() : closeDrawer();
                        }}
                        component={item.href ? 'a' : 'div'} // Dynamically set component as <a> for href
                        href={item.href || undefined}
                    >
                        <ListItemText primary={item.label} sx={{ color: `${color}` }} />
                    </ListItem>
                ))}
            </List>
        </Box>
        </>,
        document.getElementById('drawer')
    );
};

export default Drawer;
