const sizes = {
    phone: 376,
    tablet: 768,
    desktop: 992,
    giant: 1170
}

function phone(...arg) {
    return css`
        @media(max-width: ${sizes.phone}px) {
            ${css(...arg)}
        }
    `;
}

const media = {
    phone
};

export default media;