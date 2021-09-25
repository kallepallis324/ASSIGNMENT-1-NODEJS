const initialState = {
    currentPlayer: 0,
}

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {

        case 'playerCount':
            return { ...state, currentPlayer: payload }

        default:
            return state
    }
}
