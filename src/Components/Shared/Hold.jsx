import { Dna } from "react-loader-spinner";


const Hold = ({text}) => {
    return (
        <div className="flex flex-col space-y-6 items-center justify-center h-[70vh]">
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
        <h2>{text}</h2>
      </div>
    );
};

export default Hold;