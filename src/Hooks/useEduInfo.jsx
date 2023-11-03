import { useQuery } from "@tanstack/react-query";


const useEduInfo = () => {
    const { data: educations = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['educations'],
        queryFn: async () => {
            const res = await fetch('https://my-protfolio-server-gamma.vercel.app/educations');
            return res.json();

        }
    })

    return {educations, loading, refetch};
};

export default useEduInfo;