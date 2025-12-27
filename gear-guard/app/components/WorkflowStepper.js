"use client";

export default function WorkflowStepper({ status }) {
  const steps = [
    "New Request",
    "In Progress",
    "Repaired",
    "Scrap",
  ];

  const currentIndex = steps.indexOf(status);
  const isFinal = status === "Scrap";

  return (
    <div className="flex items-center gap-2 text-sm">
      {steps.map((step, index) => {
        const isCompleted = index < currentIndex || isFinal;
        const isActive = index === currentIndex && !isFinal;

        return (
          <div key={step} className="flex items-center gap-2">
            <span
              className={`font-medium ${
                isCompleted
                  ? "text-green-600"
                  : isActive
                  ? "text-blue-600"
                  : "text-gray-400"
              }`}
            >
              {step}
            </span>

            {index !== steps.length - 1 && (
              <span className="text-gray-300">→</span>
            )}
          </div>
        );
      })}
    </div>
  );
}
