import ArcDemo01 from "@/components/products/ArcDemo01";
import ArcDemo02 from "@/components/products/ArcDemo02";
import CircleDemo01 from "@/components/products/CircleDemo01";
import CircleDemo02 from "@/components/products/CircleDemo02";
import CircleDemo03 from "@/components/products/CircleDemo03";

export default function Home() {
  return (
    <div className="p-10">
      <div>test</div>
      <div className="flex flex-wrap gap-4">
        <ArcDemo01 />
        <ArcDemo02 />
        <CircleDemo01 />
        <CircleDemo02 />
        <CircleDemo03 />
      </div>
    </div>
  );
}
