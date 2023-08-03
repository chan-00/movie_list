import { atom } from 'recoil';

const cardModalDisplay = atom<boolean>({
    key: 'cardModalDisplay',
    default: false,
});

export { cardModalDisplay };