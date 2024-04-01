const finishLineVariants = {
    VERTICAL_LEFT: 'visible vertical left',
    VERTICAL_MIDDLE: 'visible vertical v-middle',
    VERTICAL_RIGHT: 'visible vertical right',
    HORIZONTAL_TOP: 'visible horizontal top',
    HORIZONTAL_MIDDLE: 'visible horizontal h-middle',
    HORIZONTAL_BOTTOM: 'visible horizontal bottom',
    DIAGONAL_BOTTOM_TOP: 'visible diagonal bottom-top',
    DIAGONAL_TOP_BOTTOM: 'visible diagonal top-bottom',
}

const calculateClass = (lineIndex) => {
    switch (lineIndex) {
        case 0:
            return finishLineVariants.HORIZONTAL_TOP;
        case 1:
            return finishLineVariants.HORIZONTAL_MIDDLE;
        case 2:
            return finishLineVariants.HORIZONTAL_BOTTOM;
        case 3:
            return finishLineVariants.VERTICAL_LEFT;
        case 4:
            return finishLineVariants.VERTICAL_MIDDLE;
        case 5:
            return finishLineVariants.VERTICAL_RIGHT;
        case 6:
            return finishLineVariants.DIAGONAL_TOP_BOTTOM;
        case 7:
            return finishLineVariants.DIAGONAL_BOTTOM_TOP;
        default:
            return '';
    }
}
export function calculateWinner(squares) {

    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return [squares[a], calculateClass(i)];
        }
    }

    return [null, ''];
}
