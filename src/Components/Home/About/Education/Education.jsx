import Lottie from "lottie-react";
import about from "../../../../assets/animations/eductaion.json";
import useEduInfo from "../../../../Hooks/useEduInfo";

const Education = () => {

    const { educations } = useEduInfo();
    console.log(educations);
    return (
        <div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="rounded-lg lg:w-1/2" data-aos="zoom-in-up" >
                    <h1 className="text-5xl font-bold lg:hidden text-center" data-aos="zoom-in-down">Education</h1>
                    <Lottie animationData={about} />
                </div>
                <div className="w-full lg:w-1/2">
                    <h1 className="hidden lg:block  text-5xl font-bold" data-aos="zoom-in-down">Education</h1>

                    <div className="overflow-x-auto my-10" data-aos="zoom-in-up">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Degree</th>
                                    <th>Institution</th>
                                    <th>Duration</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    educations.map((edu,ind) =>
                                        <tr key={edu._id}>
                                            <th>{ind+1}</th>
                                            <td>{edu.degree}</td>
                                            <td>{edu.institution}y</td>
                                            <td>{edu.start_date}-{edu.end_date}</td>
                                        </tr>

                                    )
                                }
                                {/* row 1 */}
                                {/* <tr>
                                    <th>1</th>
                                    <td>B.Sc in CSE</td>
                                    <td>Varendra University</td>
                                    <td>2019-2023</td>
                                </tr> */}
                                {/* row 2 */}
                                {/* <tr>
                                    <th>2</th>
                                    <td>H.S.C</td>
                                    <td>Court College</td>
                                    <td>2017-2019</td>
                                </tr> */}
                                {/* row 3 */}
                                {/* <tr>
                                    <th>3</th>
                                    <td>S.S.C</td>
                                    <td>Court Academy</td>
                                    <td>2015-2017</td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Education;