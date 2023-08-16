import Styled from 'styled-components';

const GmapWraper = Styled.div`
    wieth: ${(props) => props.width}; 
    height: ${(props) => props.height};
    position: relative;
    .leaflet-container {
        wieth: ${(props) => props.width}; 
        height: ${(props) => props.height};
    }
    .leaflet-bar{
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']} !important;
        a,
        a:hover{
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        }
        
    }
`;

export { GmapWraper };
