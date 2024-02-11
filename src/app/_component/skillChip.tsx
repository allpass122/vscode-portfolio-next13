import { cn } from "@/utils/cn";

export type ChipSet =
  | "nextjs"
  | "tailwind"
  | "nuqs"
  | "headless-ui"
  | "react-query"
  | "zod"
  | "joi"
  | "next-intl"
  | "mui"
  | "dnd-kit"
  | "postgres"
  | "knex"
  | "node"
  | "antd"
  | "mui"
  | "strapi";

function SkillChip({ name }: { name: ChipSet }) {
  const chipClassName =
    "flex-wrap flex h-6 cursor-pointer select-none content-center rounded-3xl border-2  px-2 py-1 text-sm";
  const NextjsChip = (() => {
    return <div className={cn(chipClassName, "border-blue-400 hover:bg-blue-800")}>nextjs</div>;
  })();
  const TailwindChip = (() => {
    return <div className={cn(chipClassName, "border-green-400 hover:bg-green-800")}>tailwind</div>;
  })();
  const NuqsChip = (() => {
    return <div className={cn(chipClassName, "border-red-400 hover:bg-red-800")}>nuqs</div>;
  })();
  const HeadlessUIChip = (() => {
    return (
      <div className={cn(chipClassName, "border-gray-400 hover:bg-gray-800")}>headless-ui</div>
    );
  })();
  const ReactQueryChip = (() => {
    return (
      <div className={cn(chipClassName, "border-orange-400 hover:bg-orange-800")}>react-query</div>
    );
  })();
  const ZodChip = (() => {
    return <div className={cn(chipClassName, "border-purple-400 hover:bg-purple-800")}>zod</div>;
  })();
  const JoiChip = (() => {
    return <div className={cn(chipClassName, "border-purple-400 hover:bg-purple-800")}>joi</div>;
  })();
  const NextIntlChip = (() => {
    return <div className={cn(chipClassName, "border-sky-400 hover:bg-sky-800")}>next-intl</div>;
  })();
  const MuiChip = (() => {
    return <div className={cn(chipClassName, "border-purple-400 hover:bg-purple-800")}>mui</div>;
  })();
  const PostgresChip = (() => {
    return <div className={cn(chipClassName, "border-sky-400 hover:bg-sky-800")}>postgres</div>;
  })();
  const DndKitChip = (() => {
    return (
      <div className={cn(chipClassName, "border-orange-400 hover:bg-orange-800")}>dnd-kit</div>
    );
  })();
  const KnexChip = (() => {
    return <div className={cn(chipClassName, "border-gray-400 hover:bg-gray-800")}>knex</div>;
  })();
  const NodeChip = (() => {
    return <div className={cn(chipClassName, "border-green-400 hover:bg-green-800")}>node</div>;
  })();
  const AntdChip = (() => {
    return <div className={cn(chipClassName, "border-pink-400 hover:bg-pink-800")}>antd</div>;
  })();
  const StrapiChip = (() => {
    return <div className={cn(chipClassName, "border-pink-400 hover:bg-pink-800")}>strapi</div>;
  })();

  if (name === "nextjs") return NextjsChip;
  if (name === "tailwind") return TailwindChip;
  if (name === "nuqs") return NuqsChip;
  if (name === "headless-ui") return HeadlessUIChip;
  if (name === "react-query") return ReactQueryChip;
  if (name === "zod") return ZodChip;
  if (name === "joi") return JoiChip;
  if (name === "next-intl") return NextIntlChip;
  if (name === "mui") return MuiChip;
  if (name === "dnd-kit") return DndKitChip;
  if (name === "postgres") return PostgresChip;
  if (name === "knex") return KnexChip;
  if (name === "node") return NodeChip;
  if (name === "antd") return AntdChip;
  if (name === "strapi") return StrapiChip;
  return <div className={cn(chipClassName, "border-blue-400 hover:bg-blue-800")}>{name}</div>;
}

export default SkillChip;
