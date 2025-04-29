import * as React from 'react';
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup, { toggleButtonGroupClasses } from '@mui/material/ToggleButtonGroup';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    [`& .${toggleButtonGroupClasses.grouped}`]: {
        margin: theme.spacing(0.5),
        border: 0,
        borderRadius: theme.shape.borderRadius,
        [`&.${toggleButtonGroupClasses.disabled}`]: {
            border: 0,
        },
    },
    [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]:
    {
        marginLeft: -1,
        borderLeft: '1px solid transparent',
    },
}));

export default function LanguageToggleComponent() {
    const [alignment, setAlignment] = React.useState('left');
    const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string,) => {
        console.info(event);
        setAlignment(newAlignment);
    };

    return (
        <div>
            <Paper elevation={0} sx={() => ({ display: 'flex', padding: "0px 1px 0px 6px", width: "fit-content", flexWrap: 'wrap', backgroundColor: "transparent" })}>
                <StyledToggleButtonGroup size="small" value={alignment} exclusive onChange={handleAlignment} aria-label="text alignment"  >
                    <ToggleButton value="EN" >
                        <img src="/england-64.png" className="w-8 h-8 " />
                    </ToggleButton>
                    <ToggleButton value="FA">
                        <img src="/iran-64.png" className="w-8 h-8 " />
                    </ToggleButton>
                </StyledToggleButtonGroup>
            </Paper>
        </div>
    );
}