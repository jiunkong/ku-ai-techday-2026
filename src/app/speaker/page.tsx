"use client";
import Image from "next/image";

interface Speech {
    name: string,
    content: string
}

const SpeakerItem = (props: { image: string, name: string, desc: string, career: string[], academy: string[], speech: Speech, priority?: boolean, objectX?: number }) => {
    return (
        <div className="mt-15">
            <div className="lg:flex lg:items-start">
                <div className="w-50 h-50 rounded-xl overflow-hidden shrink-0 bg-gray-100">
                    <Image src={props.image} width={600} height={600} priority={props.priority} className={"w-full h-full object-cover"} alt={props.name} style={{ objectPosition: props.objectX ? `${props.objectX}% center` : undefined }}/>
                </div>
                <div className="mt-8 lg:ml-16 lg:mt-0 grow min-w-0">
                    <h2>
                        <span className="font-bold text-3xl">{props.name}</span>
                        <span className="ml-2 text-(--title) font-bold">{props.desc}</span>
                    </h2>
                    { props.academy.length > 0 && (
                        <div className="mt-3">
                            <h3 className="font-bold text-(--title) mb-1">학력</h3>
                            <ol>
                                { props.academy.map((item, i) => {
                                    return (
                                        <li key={i} className="text-sm">
                                            {item}
                                        </li>
                                    )
                                }) }
                            </ol>
                        </div>
                    ) }
                    { props.career.length > 0 && (
                        <div className="mt-3">
                            <h3 className="font-bold text-(--title) mb-1">경력</h3>
                            <ol className="lg:max-h-[140px] lg:overflow-y-auto scrollbar-clean pr-2">
                                { props.career.map((item, i) => {
                                    return (
                                        <li key={i} className="text-sm whitespace-pre-wrap">
                                            {item}
                                        </li>
                                    )
                                }) }
                            </ol>
                        </div>
                    ) }
                </div>
            </div>
            <div className="mt-8 lg:mt-10">
                <h3 className="font-bold text-(--title) mb-1">강연</h3>
                <h4 className="font-bold mb-1">{props.speech.name}</h4>
                <p className="whitespace-pre-wrap text-sm w-full">{props.speech.content}</p>
            </div>
            <div className="hidden lg:block bg-(--title) h-1 w-32 mt-10"></div>
        </div>
    )
}

export default function Speaker() {
    return (
        <div className="w-[80vw] lg:w-[70vw] mx-auto text-black">
            <div className="flex items-center gap-12 mt-27 lg:mt-31">
                <h1 className="text-(--title) text-4xl font-black">INVITED SPEAKERS</h1>
                <div className="hidden lg:block grow bg-(--title) h-1"></div>
            </div>
            <div className="flex flex-col lg:pl-8 pb-35">
                <SpeakerItem image="/speaker/1.png" name="이희석" desc="42dot" career={[
                    "2026 ~ 현재 42dot | Trion (VLA Driving) Group Lead",
                    "2023 ~ 2026 우아한형제들 로보틱스랩 CV/ML Team Lead",
                    "2021 ~ 2023 NVIDIA Autonomous Vehicle",
                    "2013 ~ 2021 Qualcomm Research Korea",
                ]} academy={[
                    "2013 서울대학교 전기컴퓨터공학부 박사",
                    "2006 서울대학교 전기학부 학사",
                ]} speech={{
                    name: "From Data to Driving: Building VLA Autonomy on a Data Flywheel",
                    content: `VLA 기반 자율주행 모델의 연구 개발 및 제품화 트렌드
42dot의 Data Flywheel 중심 VLA 모델 개발
문제 해결 기반 개발 사이클을 위한 closed-loop simulation`
                }} priority/>

                <SpeakerItem image="/speaker/2.jpg" name="남길주" desc="Meta" academy={[
                    "2019 KAIST 전산학 박사",
                    "2014 KAIST 전산학 석사",
                    "2012 고려대학교 전기전자공학부 학사",
                ]} career={[
                    "2020 ~ 현재 Meta Research Scientist"
                ]} speech={{
                    name: "My Bitter Lesson with Computer Graphics",
                    content: 
`In his essay "The Bitter Lesson," Richard Sutton argued that general methods leveraging computation ultimately outperform hand-crafted ones.
In this talk, I share my own version of this lesson, learned the hard way over a decade in computer graphics.
Where does the bitter lesson apply to graphics, and where does it not?
I argue that the answer depends on whether a problem genuinely requires 3D, physics, and control, or if it simply produces 2D pixels.
I will also share a few advices for graduate students starting their research today, showing which directions will compound in value over a decade, and which will be quietly subsumed by the next scale-up.`
                }} />

                <SpeakerItem image="/speaker/3.png" name="이경무" desc="서울대학교" academy={[
                    "1993 University of Southern California 전기공학 박사",
                    "1986 서울대학교 제어계측공학과 석사",
                    "1984 서울대학교 제어계측공학과 학사",
                ]} career={[
                    "2022 ~ 현재 서울대학교 석좌교수 (SNU Distinguished Professor)",
                    "2022 ~ 현재 IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI) 편집장 (Editor-in-Chief)",
                    "2022 ~ 현재 한국공학한림원 정회원",
                    "2021 ~ 현재 IEEE Fellow",
                    "2021 ~ 현재 한국과학기술한림원 정회원",
                    "2019 ~ 2019 IEEE ICCV (International Conf. on Computer Vision) 2019 조직위원장",
                    "2018 ~ 2021 한국컴퓨터비전학회 (KCVS) 회장",
                    "2003 ~ 현재 서울대학교 전기·정보공학부 교수",
                ]} speech={{
                    name: "AI 시대, 연구자의 의미와 역할은 무엇인가?",
                    content: `최근 AI의 급격한 발전으로 인간 고유의 연구 영역까지 영향을 미치고 있다.
도구로서의 역할을 넘어 주체적 연구 에이전트로서의 AI에 대한 우려와 기대가 교차한다.
새롭게 전개되는 이러한 시대에 과연 연구란 무엇이며 연구자의 역할은 무엇인가?
본 강연에서는 이러한 질문에 대해 함께 고민해 보고자 한다.`
                }}/>

                <SpeakerItem image="/speaker/4.png" name="신진우" desc="KAIST" career={[
                    "2025 ~ 현재 ICT-KAIST 석좌교수",
                    "2020 ~ 현재 KAIST 김재철AI대학원 및 전기및전자공학부 석좌교수",
                    "2013 ~ 현재 KAIST 전기및전자공학부 교수",
                    "2012 ~ 2013 IBM T. J. Watson Research Center, Business Analytics and Mathematical Sciences 박사후연구원",
                    "2010 ~ 2012 Georgia Institute of Technology, Algorithms & Randomness Center 박사후연구원",
                ]} academy={[
                    "2010 Massachusetts Institute of Technology (MIT) 수학 박사",
                    "2001 서울대학교 수학·컴퓨터공학 학사",
                ]} speech={{
                    name: "로봇 파운데이션 (RFM) 모델의 현재와 미래, 그리고 우리의 기회",
                    content: `ChatGPT는 Transformer라는 범용 구조, 예측 가능한 성능 향상을 보장하는 scaling law, 그리고 추가 학습 없이 새로운 과제를 수행하는 in-context learning이라는 세 조건이 갖추어진 뒤에야 임계점을 넘었다.
본 강연은 이 세 조건을 잣대로 로봇 파운데이션 모델(RFM)의 현주소를 진단하고, 로봇의 "ChatGPT 모먼트"가 언제, 어떤 형태로 올 것인지를 전망한다.
향후 RFM은 하나의 거대 end-to-end 모델보다는 추론과 계획을 담당하는 VLM이 상위에서 다수의 행동 모델과 도구를 orchestration하는 agentic 계층 구조로 진화할 것이며, 저지연 action policy, 촉각·힘 등 물리 감각의 통합, 강화학습 기반 post-training이 핵심 경쟁력이 될 것으로 전망한다.
이러한 방향의 실증 사례로 시각·운동·촉각·토크를 통합한 dexterity-first 파운데이션 모델 RLDX-1의 성과를 공유하고, 미국·중국 중심의 RFM 경쟁 속에서 제조 현장 데이터와 손 조작(dexterity)이라는 미개척 영역이 한국 로봇·AI 커뮤니티에 제공하는 차별화된 기회를 제안한다.`
                }}/>

                <SpeakerItem name="안병주" image="/speaker/5.jpeg" desc="Apple" academy={[
                    "2023 Carnegie Mellon University 전기컴퓨터공학 박사",
                    "2014 서울대학교 전기컴퓨터공학 석사",
                    "2012 서울대학교 전기컴퓨터공학 학사",
                ]} career={[
                    "2024 ~ 현재 Apple Research Scientist",
                    "2014 ~ 2017 KIST 영상미디어연구단 연구원",
                ]} speech={{
                    name: "Technology vs. Use Cases: Reflections on Al Research",
                    content: `Technology-driven vs. Use-case-driven Al research
Computational imaging과 generative AI를 연구하며, 학교와 산업에서 경험한 서로 다른 연구 방식`
                }}/>

                <SpeakerItem name="Umar Iqbal" desc="NVIDIA" image="/speaker/6.jpeg" academy={[
                    "2018 University of Bonn Computer Science 박사",
                    "2013 Tampere University of Technology Information Technology 석사",
                    "2010 COMSATS Institute of Information Technology Computer Engineering 학사",
                ]} career={[
                    "2019 ~ 현재 NVIDIA Senior Research Manager"
                ]} speech={{
                    name: "Beyond Locomotion: Turning Human Data into Humanoid Interaction Skills",
                    content:
`Humanoid robots will need to move beyond locomotion and acquire rich interaction skills: picking up objects, manipulating tools, navigating human environments, and performing useful physical work.
This talk examines how scalable human data can be transformed into robot-ready capabilities.
I will discuss the tradeoffs among internet videos, motion capture, wearables, and teleoperation, and present a human-to-robot motion ecosystem spanning unified human body representations, scalable retargeting, controllable text-to-motion generation, video-based motion recovery, and whole-body humanoid control.
The talk then focuses on the harder problem of human-object interaction.
Unlike locomotion, interaction requires object geometry, motion, contact timing, affordance understanding, and physical plausibility, making large-scale data collection and reconstruction much more difficult.
I will describe recent efforts such as GRAIL, which uses video models as controllable interaction priors together with known 3D scenes to generate physically grounded loco-manipulation data for humanoids.
The central message is that video models, motion datasets, simulation, and robot control must be connected end to end; data only matter when it transfers into real robot behavior.`
                }}/>

                <SpeakerItem image="/speaker/7.jpg" name="오순영" desc="AWS" academy={[
                    "2000 서울여자대학교 컴퓨터공학 학사"
                ]}
                career={[
                    "2025 ~ 현재 Amazon Web Services Solutions Architect 테크리드",
                    "2025 ~ 현재 POSTECH 인공지능대학원 겸직교수",
                    "2025 ~ 현재 대통령직속 국가인공지능전략위원회 정부기관 산하 자문위원",
                    "2023 ~ 현재 한국공학한림원 기술경영정책분과, 인재양성위원회",
                    "2021 ~ 현재 과실연 AI미래포럼 국내 최대 AI전문가그룹 공동의장",
                ]} speech={{
                    name: "From Idea to Impact on AWS: From Generative AI to Autonomous Agents",
                    content:
`AI competitiveness is no longer determined by model performance or demo quality alone.
To turn an idea into a production service that scales securely, builders must make deliberate decisions across data connectivity, security, cost, scalability, governance, and operations from day one.
This session walks through the end-to-end AI journey on AWS: developing models, building generative AI applications and autonomous agents, and operating them at production scale.
Using real-world customer examples across industries, we will examine what separates successful AI projects from stalled experiments and share concrete best practices for cloud-native AI development.
We will also discuss the technical skills, hands-on experience, and career paths that define an "AI builder," someone who ships ideas as measurable customer value, not just prototypes.`
                }} /*objectX={80}*//>
                
                <SpeakerItem name="김현승" image="/speaker/8.jpg" desc="크래프톤" academy={[
                    "2021 고려대학교 컴퓨터학 학사",
                ]} career={[
                    "2024 ~ 현재 크래프톤 AI Companion Team Lead",
                    "2024 ~ 2026 크래프톤 PUBG Ally Project Lead",
                ]} speech={{
                    name: "Toward Fully Autonomous Embodied Agents",
                    content: `사람처럼 상황을 이해하고, 스스로 판단하며, 자연스럽게 대화하고 행동하는 AI 에이전트를 만들기 위한 도전과 가능성을 살펴봅니다.
PUBG Ally는 플레이어와 함께 게임을 플레이하며 실시간으로 소통하고 행동하는 AI teammate로, 복잡한 가상 환경에서 embodied agent를 구현한 사례입니다.
이번 발표에서는 PUBG Ally의 개발과 실제 서비스 경험을 바탕으로, 더욱 자율적인 embodied agent로 나아가기 위해 해결해야 할 과제들을 논의합니다.`
                }}/>

                <SpeakerItem name="표윤석" image="/speaker/9.png" desc="로보티즈" academy={[
                    "2016 규슈대학교 정보지능공학 박사",
                    "2013 규슈대학교 정보지능공학 석사",
                    "2009 광운대학교 전자공학과 학사",
                ]} career={[
                    "2026 ~ 현재 국가인공지능전략위원회 자문위원",
                    "2018 ~ 2019 Open Robotics ROS 2 TSC 로봇 운영체제 기술운영위원",
                    "2016 ~ 현재 로보티즈 부사장 (휴머노이드 로봇 개발 총괄)",
                    "2014 ~ 2016 일본학술진흥회 (JSPS) 연구원",
                    "2009 ~ 2010 한국과학기술연구원 (KIST) 연구원",
                ]} speech={{
                    name: "Physical AI 시대의 휴머노이드 로봇 개발",
                    content: `로보틱스의 패러다임이 규칙 기반 제어에서 학습 기반의 Physical AI와 로봇 파운데이션 모델(RFM)로 급격히 전환되는 최신 흐름을 조명합니다.
미국과 중국의 치열한 기술·물량 공세 속에서 글로벌 휴머노이드 경쟁 구도를 분석하고 이에 대응하기 위한 독자적인 기술 포지셔닝 전략을 모색합니다.
오픈소스 휴머노이드(AI Worker, AI Sapiens) 개발 사례를 바탕으로 텔레오퍼레이션 데이터 수집부터 VLA 모델 학습, 강화학습 기반 보행 제어, 실로봇 배포까지 이어지는 End-to-End AI 파이프라인을 공유합니다.`
                }}/>

                <SpeakerItem name="이재욱" image="/speaker/10.jpg" desc="LG전자" academy={[
                    "2008 서울대학교 기계항공공학과 석사",
                    "1997 서울대학교 기계공학과 학사"
                ]} career={[
                    "2026 ~ 현재 국가인공지능전략위원회 휴머노이드분과 자문위원",
                    "2025 ~ 현재 LG전자 HS사업본부 HS로보틱스연구소장",
                    "2022 ~ 2026 LG전자 CTO부문 연구위원",
                    "                        - 휴머노이드로봇 Task 리더",
                    "                        - Embodied AI 로봇 Task 리더",
                    "                        - 모바일매니퓰레이터 Task 리더"
                ]} speech={{
                    name: "Physical AI 시대: LG의 로봇 생태계",
                    content: 
`LG는 One LG 체계를 기반으로 로봇, 데이터, AI, 통신, 배터리를 통합한 Physical AI Full Stack 생태계를 구축하고 있습니다.
제조·물류·상업·홈 현장에서 생성되는 데이터를 Data Factory로 수집하고 RFM/VLA를 지속적으로 학습시키는 Data Flywheel을 통해 차별화된 로봇 경쟁력을 확보하고 있습니다.
이번 강연에서는 LG전자가 가전 중심에서 로봇 제조 및 Physical AI 플랫폼 사업자로 진화하는 과정을 소개합니다.`
                }}/>
            </div>
        </div>
    )   
}