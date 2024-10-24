import { Separator } from "@/components/ui/separator";
import { ControlNetworkGraph } from "./_components/control-netowrk-graph";

export default function ConnectionsPage() {
  return (
    <>
      <section className="flex max-w-2xl lg:max-w-[1024px] w-full flex-col gap-5 p-5 ">
        <h1>Connections</h1>
        <Separator />
        <div className="flex flex-col gap-2">
          <ControlNetworkGraph />
        </div>
      </section>
    </>
  );
}
