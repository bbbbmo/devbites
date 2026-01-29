import { Components } from "react-markdown";

export const markdownComponents: Partial<Components> = {
  h3: ({ ...props }) => (
    <h3
      className="scroll-m-20 text-xl font-semibold tracking-tight mt-6 mb-4"
      {...props}
    />
  ),
  pre: ({ ...props }) => (
    <pre className="bg-muted p-4 rounded-lg overflow-x-auto my-4" {...props} />
  ),
  code: ({ className, ...props }) => {
    const isInline = !className;
    return isInline ? (
      <code
        className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono"
        {...props}
      />
    ) : (
      <code className="block bg-transparent text-sm font-mono" {...props} />
    );
  },
};
