import { listCustomers } from "@/app/actions";
import QuickBillForm from "@/components/QuickBillForm";

export const dynamic = "force-dynamic";

export default async function NewBillPage() {
  const customers = await listCustomers();

  return (
    <div className="flex flex-col gap-4 pb-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">New Credit Bill (Naya Udhaar Bill)</h1>
        <a href="/" className="text-lg text-stone-600 underline">
          Back (Wapas)
        </a>
      </div>
      <QuickBillForm initialCustomers={customers} />
    </div>
  );
}
