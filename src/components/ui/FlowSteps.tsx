import type { FlowStep } from "@/data/bots";

interface FlowStepsProps {
  steps: FlowStep[];
}

export default function FlowSteps({ steps }: FlowStepsProps) {
  return (
    <div className="flex flex-col gap-0">
      {steps.map((step, i) => (
        <div key={step.step} className="flex gap-4">
          {/* Step connector */}
          <div className="flex flex-col items-center">
            <div
              className="on-accent w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold"
            >
              {step.step}
            </div>
            {i < steps.length - 1 && (
              <div
                className="w-px flex-1 my-1"
                style={{ backgroundColor: "var(--border)", minHeight: "24px" }}
              />
            )}
          </div>

          {/* Content */}
          <div className="pb-6">
            <p
              className="text-base font-semibold leading-tight"
              style={{ color: "var(--text)" }}
            >
              {step.label}
            </p>
            <p
              className="text-sm mt-1 leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {step.detail}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
