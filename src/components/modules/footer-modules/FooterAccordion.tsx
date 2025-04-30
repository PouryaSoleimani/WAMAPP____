import React from 'react';
import { AccordionSummary, keyframes, styled } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import { FaChevronDown } from 'react-icons/fa';

interface SingleAccordionProps {
    title: string;
    desc: string;
    icon: React.ElementType;
}

const contentExpand = keyframes`
  0% {
    transform: translateY(0);   
    opacity: 0;
    max-height: 0;
  }
  100% {
    opacity: 1;
    transform: translateY(2px);
    max-height: 600px;
  }
`;

const contentCollapse = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
    max-height: 500px;
  }
  100% {
    opacity: 0;
    transform: translateY(-10px);
    max-height: 0;
  }
`;

const rotateDown = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;

const rotateUp = keyframes`
  from {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

const slideInWithBounce = keyframes`
  0% {
    transform: translateX(-20%);
    opacity: 0;
  }
  60% {
    transform: translateX(10%);
    opacity: 1;
  }
  100% {
    transform: translateX(0);
  }
`;

const CustomAccordion = styled(Accordion)(() => ({
    backgroundColor: 'transparent',
    boxShadow: 'none',
    border: 'none',
    margin: 0,
    width: "90%",
    maxWidth: '500px',
    padding: 0,
    color: 'var(--text-primary)',
    transition: 'all 0.3s ease-in-out',

    '& .MuiCollapse-root': {
        animation: `${contentExpand} 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
        '&.MuiCollapse-hidden': {
            animation: `${contentCollapse} 0.5s cubic-bezier(0.36, 0, 0.66, -0.56) forwards`,
        },
        overflow: 'hidden',
    },

    '& .MuiAccordionDetails-root': { padding: '0  2px 2px 4px', },
    '&.Mui-expanded': {
        margin: '8px 0', '& .MuiAccordionSummary-root': {
            minHeight: '48px', '& .MuiAccordionSummary-content': { margin: '12px 0', },
        },
    },
}));

const AnimatedChevron = styled(FaChevronDown)({
    transition: 'transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
    '&.rotated': {
        transform: 'rotate(180deg)',
    },
});

const FooterAccordion = ({ title, desc, icon }: SingleAccordionProps) => {
    const Icon = icon;

    return (
        <CustomAccordion disableGutters sx={{width : "100%" , padding : "0 7px"}}>
            <AccordionSummary
                expandIcon={<AnimatedChevron className="text-[var(--text-primary)] w-2.5 h-2.5"
                    sx={{ '&.Mui-expanded': { animation: `${rotateDown} 0.4s forwards`, }, '&:not(.Mui-expanded)': { animation: `${rotateUp} 0.4s forwards`, } }} />
                }
                sx={{
                    '& .MuiAccordionSummary-content': { margin: '8px 0', transition: 'margin 0.4s ease', animation: `${slideInWithBounce} 0.6s ease-in-out`, },
                    minHeight: '40px',
                    padding: '0 8px',
                }}
            >
                <span className="flex items-center gap-2 text-[var(--text-menu-title)] text-[14px] font-medium">
                    <Icon className="text-[var(--text-menu-title)] w-5 h-5" />
                    {title}
                </span>
            </AccordionSummary>
            <AccordionDetails sx={{ animation: `${contentExpand} 0.4s forwards`, '&.MuiCollapse-hidden': { animation: `${contentCollapse} 0.3s forwards`, }, }}>
                <div className="pl-8 text-[var(--text-secondary)] text-[13px] leading-5">
                    {desc}
                </div>
            </AccordionDetails>
        </CustomAccordion>
    );
};

export default FooterAccordion;