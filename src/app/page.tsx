import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectMiniCard } from "@/components/project-mini-card";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import IconCloud from "@/components/magicui/icon-cloud";
import Markdown from "react-markdown";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <>
      <main className="flex flex-col min-h-[100dvh] space-y-10 relative rounded-xl">
        <section id="hero">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <BlurFade
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-5xl/none"
                  yOffset={8}
                >
                  <h1>
                    Hola, soy
                    <span className="text-violet-500">
                      {` ${DATA.name.split(" ")[0]}`}
                    </span>
                    👋
                  </h1>
                </BlurFade>
                <BlurFadeText
                  className="text-purple-500 max-w-[600px] md:text-xl"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.description}
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-28 border">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </section>
        <section id="about">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold ">
              Sobre <span className="text-purple-500">mi</span>
            </h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {DATA.summary}
            </Markdown>
          </BlurFade>
        </section>

        <section className="flex flex-col gap-y-3" id="skills">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>

          <BlurFade
            className="flex flex-row justify-between items-center"
            delay={BLUR_FADE_DELAY * 10}
          >
            <div className="max-h-[15rem] md:max-w-[20rem] max-w-[18rem] flex flex-wrap gap-3 items-center">
              {DATA.skills1.map((skills, index) => (
                <div
                  key={index}
                  className={cn(
                    "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in dark:border-white/5 dark:bg-neutral-900"
                  )}
                >
                  <AnimatedShinyText className="px-4 py-1 transition ease-out">
                    <span>{skills}</span>
                  </AnimatedShinyText>
                </div>
              ))}
            </div>
            <div className="w-[14rem]">
              <IconCloud iconSlugs={[...DATA.skills]} />
            </div>
          </BlurFade>
        </section>
        <section id="projects">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-xl font-bold">
                    Mis <span className="text-purple-500"> proyectos </span>
                  </h2>

                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    He trabajado en una variedad de proyectos, desde sitios web
                    simples hasta aplicaciones web complejas. Estos son algunos
                    de mis favoritos.
                  </p>
                </div>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              {DATA.projects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  {id <= 1 ? (
                    <ProjectCard
                      href={project.href}
                      title={project.title}
                      description={project.description}
                      dates={project.dates}
                      tags={project.technologies}
                      image={project.image}
                      video={project.video}
                      links={project.links}
                    />
                  ) : (
                    <ProjectMiniCard
                      href={project.href}
                      title={project.title}
                      description={project.description}
                      dates={project.dates}
                      tags={project.technologies}
                      image={project.image}
                      video={project.video}
                      links={project.links}
                    />
                  )}
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
        <section className="flex min-h-0 flex-col gap-y-3" id="education">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Educación</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </section>
      </main>
    </>
  );
}
