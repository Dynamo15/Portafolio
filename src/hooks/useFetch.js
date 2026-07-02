import { useEffect, useState } from "react";

export default function useFetch(service) {

    const [data, setData] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {

        const loadData = async () => {

            try {

                const result = await service();

                setData(result);

            } catch (err) {

                setError(err);

            } finally {

                setLoading(false);

            }

        };

        loadData();

    }, [service]);

    return {
        data,
        loading,
        error,
    };

}