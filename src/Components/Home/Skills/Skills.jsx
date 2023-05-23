import AOS from 'aos';
import 'aos/dist/aos.css';
const Skills = () => {
    AOS.init();
    return (
        <div id='skills' className="lg:flex justify-between my-24" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
            <div className="" data-aos="fade-up" data-aos-anchor-placement="top-center">
                <h1 className="text-center text-5xl font-extralight">Technical Skills</h1>
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>html </td>
                            <td >
                                <progress title="100%" className="cursor-pointer progress progress-info w-56" value="100" max="100"></progress>
                            </td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <td>css </td>
                            <td>
                                <progress title="85%" className="cursor-pointer progress progress-info w-56" value="85" max="100"></progress>
                            </td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <td>php </td>
                            <td>
                                <progress title="85%" className="cursor-pointer progress progress-info w-56" value="85" max="100"></progress>
                            </td>
                        </tr>
                        {/* row 3.1 */}
                        <tr>
                            <td>javaScript </td>
                            <td>
                                <progress title="85%" className="cursor-pointer progress progress-info w-56" value="85" max="100"></progress>
                            </td>
                        </tr>
                        {/* row 4 */}
                        <tr>
                            <td>React Js </td>
                            <td>
                                <progress title="85%" className="cursor-pointer progress progress-info w-56" value="85" max="100"></progress>
                            </td>
                        </tr>
                        {/* row 5 */}
                        <tr>
                            <td>C & C++ </td>
                            <td>
                                <progress title="90%" className="cursor-pointer progress progress-info w-56" value="90" max="100"></progress>
                            </td>
                        </tr>
                        {/* row 6 */}
                        <tr>
                            <td>python </td>
                            <td>
                                <progress className="progress progress-info w-56" value="80" max="100"></progress>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="" data-aos="fade-up" data-aos-anchor-placement="top-center">
                <h1 className="text-center text-5xl font-extralight">Professional Skills</h1>
                <div className="grid grid-cols-2 space-y-10">
                    <div className="mt-10 text-center">
                        <div className="radial-progress text-primary" style={{ "--value": 95 }}>95%
                        </div>
                        <p>Communications</p>
                    </div>
                    <div className="mt-10 text-center">
                        <div className="radial-progress text-primary" style={{ "--value": 90 }}>90%
                        </div>
                        <p>Team Work</p>
                    </div>
                    <div className="mt-10 text-center">
                        <div className="radial-progress text-primary" style={{ "--value": 85 }}>85%
                        </div>
                        <p>Project Management</p>
                    </div>
                    <div className="mt-10 text-center">
                        <div className="radial-progress text-primary" style={{ "--value": 60 }}>60%
                        </div>
                        <p>Creativity</p>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Skills;