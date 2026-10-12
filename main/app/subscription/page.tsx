"use client";

import { PricingTable } from "@clerk/nextjs";

export default function Subscription() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <section className="mx-auto w-full max-w-6xl">
        <div className="mb-8 text-center sm:mb-12">
          <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Pick the plan that fits your learning momentum.
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
  Choose a plan that fits your goals and start learning with AI-powered guidance.
</p>
        </div>

        <div className="rounded-[2rem] border border-slate-200/80 bg-white/75 p-3 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:p-6 lg:p-8">
          <PricingTable
            appearance={{
              elements: {
                pricingTable: "w-full !p-0",
                pricingTableCard: "rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.05)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(15,23,42,0.08)]",
                pricingTableRow: "gap-5",
                pricingTablePlan: "gap-5 rounded-[1.5rem]",
                pricingTablePlanHeader: "mb-4",
                pricingTablePlanName: "text-sm font-bold uppercase tracking-[0.18em] text-slate-500",
                pricingTablePlanDescription: "mt-2 text-sm leading-6 text-slate-600",
                pricingTablePlanPrice: "mt-4 flex items-end gap-1",
                pricingTablePlanPriceAmount: "text-4xl font-black tracking-tight text-slate-900",
                pricingTablePlanPriceCurrency: "text-base font-semibold text-slate-700",
                pricingTablePlanPricePeriod: "mb-1 text-sm text-slate-500",
                pricingTableFeatureList: "mt-5 space-y-2.5 text-sm text-slate-600",
                pricingTableFeatureItem: "flex items-center gap-2",
                pricingTableActionButton: "mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700",
                pricingTableActionButtonText: "text-white",
                pricingTableFooter: "hidden",
              },
            }}
          />
        </div>
      </section>
    </main>
  );
}