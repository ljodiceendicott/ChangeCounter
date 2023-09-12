import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-2xl font-extrabold">Change Counter</div>
      <div className="text-lg">
        practice for using a register and comparing the values from a register
        and finding the ones that would be wrong and need to be deleted
      </div>
      <Switch />
      <div id="interactive-area">
        <Input id="total-due" placeholder="Enter Total" />

        <Input
          id="money-given"
          placeholder="Enter Total Input"
          inputMode="decimal"
        />

        <Button>Make Change</Button>

        <Input id="change" contentEditable="false" />
      </div>
    </main>
  );
}
