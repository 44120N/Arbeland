'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Stack, Paper } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Accordion = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [contentHeight, setContentHeight] = useState(0)
    const contentRef = useRef(null)

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight)
        }
    }, [isOpen])

    return (
        <Paper
            elevation={3}
            sx={{
                width: '100%',
                maxWidth: 500,
                border: '2px solid black',
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: '#eaf3ff',
                boxShadow: '5px 5px 0px rgba(0,0,0,1)',
                mb: 2,
            }}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    padding: '16px',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    backgroundColor: '#93c5fd',
                    border: 'none',
                    outline: 'none',
                    cursor: 'pointer',
                    borderBottom: '2px solid black',
                    borderRadius: isOpen ? '0px': '8px',
                    color: '#fff'
                }}
            >
                {question}
                <Stack
                    style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                    }}
                >
                    <KeyboardArrowDownIcon/>
                </Stack>
            </button>
            <Stack
                ref={contentRef}
                style={{
                height: isOpen ? `${contentHeight}px` : '0',
                overflow: 'hidden',
                transition: 'height ease-in-out',
                backgroundColor: '#ffffff',
                padding: isOpen ? '16px' : '0 16px',
                }}
            >
                <p style={{ fontSize: '0.9rem', margin: 0 }}>{answer}</p>
            </Stack>
        </Paper>
    )
}

export default Accordion
