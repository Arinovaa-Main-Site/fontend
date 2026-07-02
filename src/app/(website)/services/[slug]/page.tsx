import LearnMore from "@/components/sections/Services/LearnMore"

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServiceDetails({ params }: Props) {
  const { slug } = await params;
  
  return (
    <>
      <LearnMore slug={slug} />
    </>
  );
}