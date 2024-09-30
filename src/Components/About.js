import { myInfo } from "../utils/data";

const About = () => {
    return (
        <div className="flex flex-col justify-center items-center px-4 md:px-8 lg:px-[20%] my-8" id="about">
            <h1 className="font-bold text-3xl md:text-4xl">Who Am I?</h1>

            {myInfo?.about && (
                <div
                    dangerouslySetInnerHTML={{
                        __html: '&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;' + myInfo.about.replace('Sanket', '<strong>Sanket</strong>')
                    }}
                    className="my-8 text-justify text-base md:text-lg lg:text-xl"
                />
            )}
        </div>
    );
};

export default About;
