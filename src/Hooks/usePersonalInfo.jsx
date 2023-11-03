import { useQuery } from '@tanstack/react-query';

const usePersonalInfo = () => {

    const { data: personalInfo = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['personalInfo'],
        queryFn: async () => {
            const res = await fetch('https://my-protfolio-server-gamma.vercel.app/personalInfo');
            return res.json();
            
        }
    })

    return [personalInfo, loading, refetch];
};

export default usePersonalInfo;