import { myInfo } from "../utils/data";
import Skill from "./Skill";

const SkillSection = () => {
    return (
        <div className="flex flex-col justify-center items-center my-4 p-4 bg-black text-white">
            <h1 className="font-bold text-3xl md:text-4xl">Skills</h1>
            <div className="h-auto flex flex-wrap space-x-2 md:space-x-4 items-center px-2 justify-center lg:my-[40px]">
                {
                    myInfo.skills.map((s, index) => (
                        <div key={s.skillName+index} className="flex-shrink-0 m-2">
                            <Skill skillName={s.skillName} expertise={s.expertise} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default SkillSection;
