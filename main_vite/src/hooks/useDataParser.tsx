import { useState, useEffect } from "react";

const useDataParser = (data: string | null) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [parsedData, setParsedData] = useState<any>(null);

  useEffect(() => {
    if (data) {
      try {
        // JSON 형식인지 확인
        const parsed = JSON.parse(data);
        setParsedData(parsed);
      } catch (e) {
        try {
          // 문자열 형식인지 확인
          const parsedStringData = JSON.parse(
            JSON.stringify(eval("(" + data + ")"))
          );
          setParsedData(parsedStringData);
        } catch (e) {
          console.error("Failed to parse data", e);
        }
      }
    }
  }, [data]);

  return parsedData;
};

export default useDataParser;
