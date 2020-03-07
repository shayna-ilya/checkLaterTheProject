export const getActiveRouteName = (state: any): string => {
    const route = state.routes[state.index];

    if (route.state) {
        return getActiveRouteName(route.state);
    }

    return route.name;
};
