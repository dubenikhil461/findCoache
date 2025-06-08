export default {
    coaches(state){
        return state.coaches
    },
    hasCoaches(state){
        return state.Coaches && state.coaches.length > 0
    }
}