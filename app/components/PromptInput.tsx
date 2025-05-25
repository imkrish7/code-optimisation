import { useState, useEffect, useCallback, useMemo, memo } from "react";

interface PromptInputProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  isGenerating: boolean;
  onGenerate: () => void;
}

function PromptInputComponent({
  prompt,
  setPrompt,
  isGenerating,
  onGenerate,
}: PromptInputProps) {
  const [buttonText, setButtonText] = useState("Generate Art")

  useEffect(() => {
    setButtonText(isGenerating ? "Generating..." : "Generate Art");
  }, [isGenerating]);

  const handlePromptChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value;
      setPrompt(newValue);
    },
    [setPrompt]
  );

  const handleGenerate = useCallback(() => {
    if (isGenerating || !prompt) return;
    onGenerate();
  }, [isGenerating, prompt, onGenerate]);

  const isButtonDisabled = useMemo(() => {
    return isGenerating || !prompt;
  }, [isGenerating, prompt]);

  const charCountDisplay = useMemo(() => {
    return `Characters: ${prompt.length}`;
  }, [prompt]);


  return (
    <div className="mb-6">
      <label htmlFor="prompt" className="block text-sm font-medium mb-2">
        Describe your artwork
      </label>
      <textarea
        id="prompt"
        value={prompt}
        onChange={handlePromptChange}
        className="w-full h-32 p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-600"
        placeholder="A serene landscape with mountains and a lake at sunset..."
      />
      <div className="text-sm text-gray-500 mt-1">{charCountDisplay}</div>
      <button
        onClick={handleGenerate}
        disabled={isButtonDisabled}
        className="w-full mt-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {buttonText}
      </button>
    </div>
  );
}

export default memo(PromptInputComponent)


