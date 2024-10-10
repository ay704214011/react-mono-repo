import styled from 'styled-components';

const withStyle = (Component, style) => {
    return styled(Component)`
       ${style}
    `;
};

export default withStyle;