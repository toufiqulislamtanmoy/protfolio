import { useEffect, useState } from "react";

const useLoading = (time) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, time); // 3000 milliseconds = 3 seconds

        return () => clearTimeout(timeout);
    }, [time]);

    return isLoading;
};

export default useLoading;
