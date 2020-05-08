import { Entry } from 'types/main-screen';

type SortBy = 'date';

export const sortEntries = (entries: Entry[], sortBy: SortBy, reversed: boolean) => {
    if (entries.length > 0) {
        return [...entries].sort((a: Entry, b: Entry) => {
            console.log(a.addDate);
            if (reversed) {
                if (a.addDate < b.addDate) {
                    return 1;
                }
                if (a.addDate > b.addDate) {
                    return -1;
                }
            } else {
                if (a.addDate > b.addDate) {
                    return 1;
                }
                if (a.addDate < b.addDate) {
                    return -1;
                }
            }

            return 0;
        });
    }
    return [];
};
