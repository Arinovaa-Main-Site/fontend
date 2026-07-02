import LearnMore from "@/components/sections/Services/LearnMore"

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServiceDetails({ params }: Props) {
  const { slug } = await params;
  console.log("slugs ::", slug);

  return (
    <div>
      <h1>{slug}</h1>
      <LearnMore />
    </div>
  );
}