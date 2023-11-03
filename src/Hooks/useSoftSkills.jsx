import { useQuery } from '@tanstack/react-query';

const useSoftSkills = () => {
    const { data: softSkills = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['softSkills'],
        queryFn: async () => {
            const res = await fetch('https://my-protfolio-server-gamma.vercel.app/softskills');
            return res.json();

        }
    })

    return { softSkills, loading, refetch };
};

export default useSoftSkills;