"use client";

import { LinkText } from "@/components/LinkText";
import Image from "next/image";

export default function Home() {
    const intro = `고려대학교 ICT명품인재양성사업단/초지능연구센터는 10월 20일(화) 본교 하나스퀘어에서 제4회 AI Tech Day를 개최합니다. AI Tech Day 2026에서는 AI 분야 국내외 최고 전문가들이 최신 AI 기술과 연구개발 성과, 미래 전략을 공유합니다. 또한 사업단 소속 연구실의 연구성과 포스터 및 데모 세션, 기업 홍보 및 리크루팅 프로그램과 함께, 고려대학교와 AWS가 공동으로 진행하는 ‘AWS AI Innovators Challenge’의 최종 데모 및 시상도 마련됩니다. AI의 현재를 살펴보고 미래를 함께 모색하는 뜻깊은 자리에 많은 관심과 참여 바랍니다.`
    const programChairs: { name: string, image?: string }[] = [
        { name: "강형엽 교수", image: "/pic1.png" },
        { name: "문경식 교수", image: "/pic2.png" },
    ]

    return (
        <>            
            <div className="grid w-screen gap-16 px-5 py-30 lg:min-h-screen lg:grid-cols-[minmax(0,1fr)_500px] lg:items-center lg:gap-14 lg:px-15 lg:py-20">
                <div>
                    <h2 className="lg:text-2xl font-bold">
                        고려대학교 ICT명품인재양성사업단/초지능연구센터
                    </h2>
                    <h1 className="text-5xl lg:text-6xl font-bold mt-2 mb-15 lg:mb-[clamp(4rem,8vh,6.25rem)]">
                        AI TECH DAY 2026
                    </h1>
                    <LinkText link="/program" className="origin-left">
                        <div className="flex gap-2 text-lg items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                            </svg>
                            <span>2026.10.20(화) 10:00 ~ 18:00</span>
                        </div>
                    </LinkText>
                    <LinkText link="/location" className="origin-left mt-2">
                        <div className="flex gap-2 text-lg items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <span>고려대학교 하나스퀘어 (지하1층)</span>
                        </div>
                    </LinkText>
                    <LinkText link="https://docs.google.com/forms/d/e/1FAIpQLSfY_-TGFIypWzmKgO-H4lBhXkPvLuLM-wZMye4IvyjkBYMEiA/viewform" className="origin-left mt-2" blank>
                        <div className="flex gap-2 text-lg items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                            </svg>
                            <span>사전등록 바로가기</span>
                        </div>
                    </LinkText>
                    <div className="text-(--subtext) mt-1 ml-8">사전등록하신 분들에게는 배지(네임택)와 행사 당일 사용가능한 쿠폰을 제공합니다.</div>
                    <div className="mt-15">
                        <h3 className="font-bold text-2xl">AI Tech Day 2026 주요 프로그램</h3>
                        <ul className="mt-1 text-sm">
                            <li>국내외 AI 최고 전문가 초청 강연</li>
                            <li>AWS AI Innovators Challenge 데모 및 시상</li>
                            <li>기업 홍보 및 리크루팅</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-2xl mt-10">초청 강연</h3>
                        <p className="mt-1">서울대학교, KAIST, 42dot, Meta, Apple, NVIDIA, AWS, 크래프톤, 로보티즈, LG전자</p>
                        <h3 className="font-bold text-2xl mt-5">기업 부스 (리크루팅 포함)</h3>
                        <p className="mt-1">AWS, 크래프톤, 퓨리오사AI, 로민, 젠젠AI, 42dot, 카카오모빌리티, 슈퍼브 AI, LG CNS</p>
                    </div>
                </div>
                <div className="flex flex-col lg:items-end lg:pt-0">
                    <div className="w-50 h-50 overflow-hidden rounded-full mx-auto lg:w-[clamp(11rem,20vh,13.75rem)] lg:h-[clamp(11rem,20vh,13.75rem)]">
                        <Image src={"/picture.png"} width={200} height={200} alt="" className="w-full h-full object-cover object-[center_30%]"/>
                    </div>
                    <div className="lg:text-right mt-5">
                        <h3 className="font-bold text-2xl">인사말</h3>
                        <h4 className="text-lg mt-2">ICT명품인재양성사업단장/초지능연구센터장</h4>
                        <h4 className="text-xl font-bold">한정현 교수</h4>
                    </div>
                    <p className="mt-3 w-full max-w-[500px] text-justify break-keep whitespace-pre-line lg:text-[clamp(0.875rem,1.45vh,1rem)] lg:leading-[clamp(1.5rem,2.2vh,1.75rem)]">
                        {intro}
                    </p>
                    <LinkText link="https://mpij.korea.ac.kr/mpij/index.do" className="origin-right mt-2" blank>
                        <div className="flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                            </svg>
                            <span>사업단 홈페이지</span>
                        </div>
                    </LinkText>
                    <div className="mt-14 grid w-full grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-8 lg:mt-[clamp(2rem,4vh,3.5rem)] lg:gap-8" aria-label="프로그램 위원장 소개">
                        {programChairs.map((chair) => (
                            <article key={chair.name} className="flex flex-col items-center">
                                <div className="relative aspect-square w-36 overflow-hidden rounded-full bg-white/5 ring-1 ring-white/10 sm:w-40 lg:w-[clamp(8rem,14vh,10rem)]">
                                    {chair.image ? (
                                        <Image src={chair.image} fill sizes="160px" alt={`${chair.name} 프로그램 위원장`} className="object-cover object-[center_10%]" />
                                    ) : null}
                                </div>
                                <div className="mt-4 text-center lg:mt-3">
                                    <p className="text-sm text-(--subtext)">프로그램 위원장</p>
                                    <p className="mt-1 break-keep font-bold">고려대학교 컴퓨터학과</p>
                                    <p className="break-keep font-bold">{chair.name}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
