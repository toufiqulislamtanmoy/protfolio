import { useQuery } from "@tanstack/react-query";


const useTechskills = () => {
    const { data: techskills = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['techskills'],
        queryFn: async () => {
            const res = await fetch('https://my-protfolio-server-gamma.vercel.app/techskills');
            return res.json();

        }
    })

    return { techskills, loading, refetch };
}
export default useTechskills;