const Skill = ({ skillName, expertise }) => {
    return <div className=" rounded-md h-max p-4 lg:m-4 shadow-white shadow-[0_0_4px_1px_rgba(255,255,255,0.5)]" id="skills">

        <div>
            <div className="flex justify-between">
                <h1>{skillName}</h1>
                <span>{expertise}</span>
            </div>
            <div className="rounded-lg border w-[300px] max-[450px]:w-[200px]">
                <div className={`bg-red-500 h-[10px] rounded-lg`} style={{ width: expertise }}></div>
            </div>
        </div>

    </div>
}

export default Skill;