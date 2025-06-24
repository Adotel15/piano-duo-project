import { useLayoutEffect, useRef } from 'react';

const useBodyScrollFreeze = (locked: boolean) => {
    const scrollY = useRef(0);

    useLayoutEffect(() => {
        if (locked) {
            scrollY.current = window.scrollY;
            const body = document.body;
            body.style.position = 'fixed';
            body.style.top = `-${scrollY.current}px`;
            body.style.width = '100%';
        } else {
            const body = document.body;
            body.style.position = '';
            body.style.top = '';
            window.scrollTo(0, scrollY.current);
        }
        return () => {
            const body = document.body;
            body.style.position = '';
            body.style.top = '';
        };
    }, [locked]);
};

export default useBodyScrollFreeze;
