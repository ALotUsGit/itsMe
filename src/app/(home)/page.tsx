import Image from "next/image";
import { twMerge } from "tailwind-merge";

import mainImg from "../../../public/images/main.png";
import me from "../../../public/images/me.png";
import WorkList from "@/components/WorkList";
import works from "../../../public/works.json";
import { TWorks } from "../types/works-type";

const skills = [
  { category: "dev", name: "Typescript" },
  { category: "dev", name: "Javascript" },
  { category: "dev", name: "Next.JS" },
  { category: "dev", name: "React" },
  { category: "dev", name: "Tailwind css" },
  { category: "dev", name: "Styled Component" },
  { category: "design", name: "Figma" },
];

export default function Home() {
  return (
    <main>
      <section className="relative flex h-screen flex-col justify-end overflow-hidden bg-[#0F1721]/90 px-6 py-12 md:px-28 md:py-32">
        <p className="text-gray-400 md:text-2xl/none">Front-End Developer</p>
        <h1 className="mb-12 mt-2 text-3xl font-bold leading-none text-white md:mb-28 md:mt-4 md:text-6xl">
          JEON A RYEON
        </h1>
        <ul className="flex flex-col gap-4 md:gap-9">
          <li className="font-medium text-gray-400 md:text-2xl/none">
            서비스 전반 UI/UX 설계 및 프론트엔드 개발 담당
          </li>
          <li className="font-medium text-gray-400 md:text-2xl/none">
            레거시 프로젝트 이관
          </li>
          <li className="font-medium text-gray-400 md:text-2xl/none">
            WebView 기반 차량 관리 서비스 개발
          </li>
          <li className="font-medium text-gray-400 md:text-2xl/none">
            기획/백엔드/운영팀과의 커뮤니케이션을 통한 시스템 UI/UX 개선
          </li>
        </ul>
        <Image
          src={mainImg}
          alt="메인 이미지"
          className="absolute left-0 top-0 -z-10 h-full object-cover"
        />
      </section>

      <section className="mx-auto flex max-w-screen-xl flex-wrap gap-x-28 gap-y-4 px-6 py-10 md:px-4 md:py-20">
        <h2 className="w-full">
          <strong className="text-xl leading-none md:text-2xl">
            전아련&nbsp;
          </strong>
          <span className="leading-none md:text-xl">Jeon A Ryeon</span>
        </h2>

        <div>
          <div className="mb-8 max-w-64 overflow-hidden rounded-lg">
            <Image className="object-contain" src={me} alt="aryeon" />
          </div>
          <h3 className="mb-4 text-lg font-semibold">Contact</h3>
          <ul className="flex flex-col gap-2">
            <li>010-2266-5953</li>
            <li>arjeon.career@gmail.com</li>
          </ul>
        </div>

        <div className="flex flex-1 flex-col gap-10">
          <div>
            <p className="mb-6">
              사용자가 어떻게 사용할지 고민하고 더 나은 경험을 설계합니다.
            </p>
            <div className="flex flex-wrap gap-x-1 gap-y-2">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className={twMerge(
                    "rounded bg-primary px-4 py-2 text-sm/none text-white",
                    skill.category === "design" && "bg-secondary",
                  )}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <ul className="flex flex-col gap-2">
            <li className="relative pl-2">
              <span className="absolute left-0">·</span> 운영 시스템 중심 관리자
              UI 설계 및 구현
            </li>
            <li className="relative pl-2">
              <span className="absolute left-0">·</span> 프론트엔드 단독 담당
              환경에서 서비스 UI 아키텍처 설계
            </li>
            <li className="relative pl-2">
              <span className="absolute left-0">·</span> 레거시
              환경(Mustache)에서 신규 기능 개발 및 개선
            </li>
            <li className="relative pl-2">
              <span className="absolute left-0">·</span> 운영/CS팀과 협업하여
              관리자 UX 개선
            </li>
            <li className="relative pl-2">
              <span className="absolute left-0">·</span> React 기반 CMS 전환
              프로젝트
            </li>
          </ul>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Career</h3>
            <ul className="flex flex-col gap-2">
              <li className="relative pl-2">
                <span className="absolute left-0">·</span> 아파트허브 (2025.01 ~
                재직 중, 프론트엔드 개발)
                <br />
                사용기술 : Javascript, jQuery, Mustache, React
              </li>
              <li className="relative pl-2">
                <span className="absolute left-0">·</span>{" "}
                한국직무능력평가연구소 (2023.02 ~ 2024.05, 웹퍼블리셔)
                <br />
                사용기술 : HTML, CSS, jQuery, JavaScript, Vue, Figma
              </li>
              <li className="relative pl-2">
                <span className="absolute left-0">·</span> HDC현대산업개발
                (2022.06 ~ 2022.10, Product Manager + 웹개발)
              </li>
              <li className="relative pl-2">
                <span className="absolute left-0">·</span> 인터메이저 (2020.02 ~
                2022.06, 웹퍼블리셔)
                <br />
                사용기술 : HTML, CSS, jQuery
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Project</h3>
            <ul className="flex flex-col gap-2">
              <li className="relative pl-2">
                <span className="absolute left-0">·</span> 오피스너 웹버전 구축
                프로젝트 (2024.09 ~ 2024.11, 프론트엔드)
                <br />
                사용기술 : Next.JS, TypeScript, Tailwind css, zustand, Github,
                Linear
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-10 md:px-10 md:py-20">
        <div className="mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8 xl:grid-cols-3 2xl:grid-cols-4">
          <h2 className="relative z-10 col-span-full text-xl font-semibold leading-none md:text-3xl">
            Work
            <span className="absolute bottom-0 left-[3.15rem] -z-10 size-2 rounded-full bg-secondary md:bottom-1 md:left-[4.7rem] md:size-3" />
          </h2>
          {works.map((work: TWorks) => (
            <WorkList
              key={work.id}
              id={work.id}
              title={work.title}
              startDate={work.startDate}
              endDate={work.endDate}
              imgs={work.imgs}
              tasks={work.tasks}
              caseStudy={work.caseStudy}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
