import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Dental Care - ${title}`;
  }, [title]);
};
export default useTitle;
