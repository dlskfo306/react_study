import { useState, useEffect } from 'react';

export default function usePromise(promiseCreator, deps){
    // 대기 중/완료/실패에 대한 상태 관리
    const [loading, setLoading] = useState(false);
    const [resolved, setResolved] = useState(null);
    const [error, setError] = useState(null);

    useEffect (() => {
        const process = async() => {
            setLoading(true);
            try {
                const resolved = await promiseCreator();
                setResolved(resolved);
            } catch(e){
                setError(e);
            }
            setLoading(false);
        };
        process();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        // 파라미터로 받아 온 deps 배열은 usePromise 내부에서 사용한 useEffect의 의존배열로 설정되는데, 
        // 이 배열을 설정하는 부분에서 ESLint 경고가 나타내게 된다.
    }, deps);

    return [loading, resolved, error];
}