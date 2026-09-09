const Row = (props: { start: string, end: string, program: string, organizer?: string, note?: string, center?: boolean }) => {
    return (
        <>
            <tr className={`${props.center ? "h-10" : "h-20"} lg:h-20`}>
                <td className="pl-2 text-sm lg:text-md w-24 lg:w-36 text-center lg:text-left">{props.start} - {props.end}</td>

                <td className={`hidden lg:table-cell pl-2 text-lg font-bold ${props.center ? "text-center text-(--title)" : ""}`}>{props.program}</td>
                <td className="hidden lg:table-cell pl-2">
                    <div>{props.organizer}</div>
                    { props.note && <span className="font-bold text-sm text-(--title) before:content-['•_']">{props.note}</span> }
                </td>

                <td className="lg:hidden">
                    <div className={`font-bold ${props.center ? "text-(--title)" : ""}`}>{props.program}</div>
                     { props.organizer && 
                        <div>
                            <span className="text-sm">{props.organizer}</span>
                            <span className="w-2 inline-block"></span>
                            { props.note && <span className="text-sm text-(--title) font-bold">{props.note}</span> }
                        </div>
                    }
                </td>
            </tr>
            <tr className="h-[1px] bg-(--delimiter)"><td colSpan={3}></td></tr>
        </>
    )
}

export default function Program() {
    return (
        <div className="w-screen pt-30 text-black">
            <h1 className="font-black text-4xl lg:text-5xl text-center text-(--title)">PROGRAM</h1>
            <table className="mx-auto mt-10 border-separate border-spacing-x-4 table-fixed pb-40">
                <thead className="text-lg text-left">
                    <tr className="hidden lg:table-row">
                        <th className="pl-2 w-36">시간</th>
                        <th className="pl-2 min-w-160">프로그램</th>
                        <th className="pl-2">연사</th>
                    </tr>
                    <tr className="h-3 hidden lg:table-row"></tr>
                    <tr className="h-[2px] bg-(--title)"><th colSpan={3}></th></tr>
                </thead>
                <tbody>
                    <Row start="10:00" end="10:10" program="개회사" organizer="한정현 사업단장" note="고려대 컴퓨터학과"/>
                    <Row start="10:10" end="10:40" program="From Data to Driving: Building VLA Autonomy on a Data Flywheel" organizer="이희석 상무" note="42dot"/>
                    <Row start="10:40" end="11:10" program="My Bitter Lesson with Computer Graphics" organizer="남길주 박사" note="Meta"/>
                    <Row start="11:10" end="11:50" program="AI 시대, 연구자의 의미와 역할은 무엇인가?" organizer="이경무 교수" note="서울대학교"/>

                    <Row start="11:50" end="13:30" program="점심" center/>

                    <Row start="13:30" end="14:10" program="로봇 파운데이션 (RFM) 모델의 현재와 미래, 그리고 우리의 기회" organizer="신진우 교수" note="KAIST"/>
                    <Row start="14:10" end="14:40" program="Technology vs. Use Cases: Reflections on Al Research" organizer="안병주 박사" note="Apple"/>

                    <Row start="14:40" end="14:50" program="Break" center/>

                    <Row start="14:50" end="15:20" program="Beyond Locomotion: Turning Human Data into Humanoid Interaction Skills" organizer="Umar Iqbar" note="NVIDIA"/>
                    <Row start="15:20" end="15:50" program="From Idea to Impact on AWS: From Generative AI to Autonomous Agents" organizer="오순영 수석" note="AWS"/>

                    <Row start="15:50" end="16:20" program="Coffee Break 및 포스터 세션" center/>

                    <Row start="16:20" end="16:50" program="Toward Fully Autonomous Embodied Agents" organizer="김현승 팀장" note="크래프톤"/>
                    <Row start="16:50" end="17:20" program="Physical AI 시대의 휴머노이드 로봇 개발" organizer="표윤석 부사장" note="로보티즈"/>
                    <Row start="17:20" end="17:50" program="TBD" organizer="이재욱 소장" note="LG전자"/>

                    <Row start="17:50" end="18:00" program="시상 및 폐회사 (포스터/데모, 고려대학교 x AWS AI Innovators Challenge)" organizer="한정현 사업단장" note="고려대 컴퓨터학과"/>
                </tbody>
            </table>
        </div>
    )
}