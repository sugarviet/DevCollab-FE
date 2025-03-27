import React from "react";

interface CompilerProps {
  result: {
    language: string;
    version: string;
    run: {
      stdout: string;
      stderr: string;
      code: number;
      signal: string | null;
      output: string;
    };
  } | null;
}

const Compiler: React.FC<CompilerProps> = ({ result }) => {
  if (!result) return <p className="text-gray-500">Chưa có kết quả.</p>;

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg border text-black">
      <h2 className="text-lg font-semibold mb-2">Kết quả Compile</h2>

      <p className="text-sm text-gray-700">
        <strong>Ngôn ngữ:</strong> {result.language} ({result.version})
      </p>

      {result.run.stdout && (
        <div className="mt-2 p-2 bg-gray-200 rounded">
          <strong className="text-green-600">Output:</strong>
          <pre className="whitespace-pre-wrap text-sm text-black">{result.run.stdout}</pre>
        </div>
      )}

      {result.run.stderr && (
        <div className="mt-2 p-2 bg-red-100 border border-red-400 rounded">
          <strong className="text-red-600">Lỗi:</strong>
          <pre className="whitespace-pre-wrap text-sm text-red-600">{result.run.stderr}</pre>
        </div>
      )}

      <p className="text-sm text-gray-700 mt-2">
        <strong>Exit Code:</strong> {result.run.code}
      </p>
    </div>
  );
};

export default Compiler;
